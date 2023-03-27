<template>
  <div
    class="bi-crop"
    :style="{
      '--left-width': `${leftWidth}px`,
      '--left-height': `${leftHeight}px`,
      '--righ-previewWH': `${rightPreviewWH}px`,
    }"
  >
    <div class="previewBox" ref="previewBoxRef"></div>
    <div class="previewBoxRound previewBox" ref="previewBoxRoundRef"></div>
    <input
      type="file"
      accept="image/,.png,.jpg,.jpeg,"
      ref="selectFileRef"
      class="bi-crop-input"
      @change="loadingImg"
    />
    <div>
      <div class="images">
        <div
          v-for="(img, index) in images"
          class="images-item"
          :style="{
            width: `${previewWidth}px`,
            height: `${previewHeight}px`,
          }"
        >
          <div v-if="loadings[index]" class="loading">
            {{ uploadText }}<el-icon size="16" class="icon"><Loading /></el-icon>
          </div>
          <div v-else class="mask">
            <div class="left">
              <ElIcon
                color="white"
                size="25"
                style="cursor: pointer"
                @click="preview(index)"
                ><ZoomIn
              /></ElIcon>
            </div>
            <div class="right">
              <ElIcon
                color="white"
                size="25"
                style="cursor: pointer"
                @click="remove(index)"
                ><Delete
              /></ElIcon>
            </div>
          </div>
          <el-image
            class="preview"
            :style="{
              width: `${previewWidth}px`,
              height: `${previewHeight}px`,
            }"
            :src="img.base64"
            :zoom-rate="1.2"
            :preview-src-list="images.map((item) => item.base64)"
            :initial-index="index"
            fit="fill"
            ref="imgRef"
          />
        </div>
        <div
          v-if="max > images.length"
          @click="uploadImg"
          class="images-item upload"
          :style="{
            width: `${previewWidth}px`,
            height: `${previewHeight}px`,
            fontSize: `16px`,
          }"
        >
          <el-icon size="28" color="#909399"><Plus /></el-icon>
        </div>
      </div>
    </div>
    <ElDialog width="750" :title="title" v-model="showCropper">
      <div class="bi-crop-container">
        <div class="bi-crop-container-left">
          <img id="cropImg" ref="cropImgRef" />
        </div>
        <div class="bi-crop-container-right">
          <div class="previewText">预览</div>
          <div
            class="previewBox"
            ref="previewBoxRef"
            v-show="previewType.includes('default')"
          ></div>
          <div
            class="previewBoxRound previewBox"
            ref="previewBoxRoundRef"
            v-show="previewType.includes('round')"
          ></div>
          <div
            class="previewBoxCircle previewBox"
            ref="previewBoxCircle"
            v-show="previewType.includes('circle')"
          ></div>
        </div>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <div class="left">
            <el-button-group round>
              <el-button round :icon="RefreshLeft" @click="rotateLeft"></el-button>
              <el-button round :icon="RefreshRight" @click="rotateRight"></el-button>
              <el-button round :icon="ZoomIn" @click="zoomIn"></el-button>
              <el-button round :icon="ZoomOut" @click="zoomOut"></el-button>
              <el-button round :icon="Refresh" @click="reset"></el-button>
            </el-button-group>
          </div>
          <div>
            <el-button @click="GetData">裁剪</el-button>
          </div>
        </div>
      </template>
    </ElDialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults } from "vue";
import {
  ElDialog,
  ElButtonGroup,
  ElButton,
  ElImage,
  ElIcon,
  ElMessage,
} from "element-plus";
import {
  ZoomIn,
  ZoomOut,
  Refresh,
  RefreshLeft,
  RefreshRight,
  Delete,
  Loading,
  Plus,
} from "@element-plus/icons-vue";
import "./crop.scss";
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";

const images = ref<
  {
    key: number;
    base64: string;
    blob: Blob;
  }[]
>([]);
const emits = defineEmits<{
  (event: "onReady", data: { base64: string; blob: Blob }): void;
  (event: "onRemove", index: number): void;
}>();
const loadings = ref<boolean[]>([]);
const props = withDefaults(
  defineProps<{
    /**
     * 需要展示的预览类型，可选值为 default、round、circle，默认值为 ['default', 'round', 'circle']。
     */
    previewType: ("default" | "round" | "circle")[];
    /**
     * 左侧图片宽度，默认值为 500。
     */
    leftWidth: number;
    /**
     * 左侧图片高度，默认值为 500。
     */
    leftHeight: number;
    /**
     * 右侧预览图片宽高，默认值为 150。
     */
    rightPreviewWH: number;
    /**
     * 图片宽度，默认值为 150
     */
    previewWidth: number;
    /**
     * 图片高度，默认值为 150
     */
    previewHeight: number;
    /**
     * 弹窗标题，默认值为 裁剪图片。
     */
    title: string;
    /**
     * 获取裁剪后的图片的配置项,需要注意的是你设置的宽高可能只生效一个,因为你设置的裁切比例不一定和你的宽高比例一致。
     * @param width number 输出画布的目标宽度。  非必填
     * @param height number 输出画布的目标高度。 非必填
     * @param minWidth number 输出画布的最小目标宽度，默认值为0 非必填
     * @param minHeight number 输出画布的最小目标高度，默认值为0. 非必填
     * @param maxWidth number 输出画布的最大目标宽度，默认值为Infinity. 非必填
     * @param maxHeight number 输出画布的最大目标高度，默认值为Infinity. 非必填
     * @param fillColor string 用于填充输出画布中任何 alpha 值的颜色，默认值为transparent. 非必填
     * @param imageSmoothingEnabled boolean 设置为更改图像是否平滑(true，默认)或不平滑(false)。
     * @param imageSmoothingQuality ImageSmoothingQuality 设置图像平滑的质量，“低”(默认值)，“中”或“高”之一。
     * @link https://github.com/fengyuanchen/cropperjs#getcroppedcanvasoptions
     */
    getDataIoptions: Cropper.GetCroppedCanvasOptions;
    /**
     * 导出图片类型，可选值为 image/jpeg、image/webp、image/png、image/bmp、image/tiff，默认值为 image/png。
     */
    type:
      | "image/jpeg"
      | "image/webp"
      | "image/png"
      | "image/bmp"
      | "image/tiff"
      | "image/svg+xml";
    /**
     * 导出图片质量，值在 0 与 1 之间，当图片格式为 image/jpeg 或者 image/webp 时用来指定图片展示质量。如果这个参数的值不在指定类型与范围之内，则使用默认值，其余参数将被忽略。
     */
    quality: number;
    max: number;
    /**
     * 确定图片如何适应容器框，同原生 object-fit
     * @default 'fill'
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
     */
    fit: "fill" | "contain" | "cover" | "none" | "scale-down";
    /**
     * 上传中文案
     */
    uploadText: string;
    /**
     * 上传前的钩子，参数为Promise函数, 自定义上传方法,如需展示上传中,这很必要
     */
    beforeReady?: (blob: Blob) => Promise<any>;
  }>(),
  {
    previewType: () => ["default", "round", "circle"],
    leftWidth: 500,
    leftHeight: 559,
    rightPreviewWH: 150,
    previewWidth: 150,
    previewHeight: 150,
    title: "裁剪图片",
    getDataIoptions: () => ({
      fillColor: "#fff",
      imageSmoothingEnabled: true,
      imageSmoothingQuality: "high",
      width: 750,
      height: 750,
    }),
    type: "image/jpeg",
    quality: 1,
    max: 2,
    fit: "fill",
    uploadText: "上传中",
  }
);
const preview = (i: number) => {
  console.log(i);
  const dom = document.querySelectorAll(".images .images-item .el-image__preview")[
    i
  ] as HTMLElement;
  dom.click();
};

const remove = (i: number) => {
  images.value.splice(i, 1);
};
const selectFileRef = ref<HTMLInputElement>();
const cropImgRef = ref<HTMLImageElement>();

const previewBoxRef = ref<HTMLElement>();
const previewBoxRoundRef = ref<HTMLElement>();
const previewBoxCircle = ref<HTMLElement>();
const showCropper = ref(false);
const uploadImg = () => {
  selectFileRef.value!.click();
};
let CROPPER: Cropper;
function loadingImg(eve: any) {
  if (
    ![
      "image/jpeg",
      "image/webp",
      "image/png",
      "image/bmp",
      "image/tiff",
      "image/svg+xml",
    ].includes(eve.target.files[0].type)
  ) {
    ElMessage.error("请上传图片格式");
    throw new Error("请上传图片格式");
  }
  showCropper.value = true;
  CROPPER?.destroy();
  //读取上传文件
  let reader = new FileReader();
  if (eve.target!.files[0]) {
    //readAsDataURL方法可以将File对象转化为data:URL格式的字符串（base64编码）
    console.log("eve.target.files[0]", eve.target.files[0].type);
    reader.readAsDataURL(eve.target.files[0]);
    reader.onload = (e) => {
      let dataURL = reader.result;
      //将img的src改为刚上传的文件的转换格式
      cropImgRef.value!.src = dataURL as any;
      const previewType = [...new Set(props.previewType)];
      const previewList: any[] = [];
      previewType.forEach((item) => {
        switch (item) {
          case "default":
            previewList.push(previewBoxRef.value);
            break;
          case "round":
            previewList.push(previewBoxRoundRef.value);
            break;
          case "circle":
            previewList.push(previewBoxCircle.value);
            break;
        }
      });
      //创建cropper实例-----------------------------------------
      CROPPER = new Cropper(cropImgRef.value!, {
        aspectRatio: 1,
        viewMode: 1,
        minContainerWidth: 100,
        minContainerHeight: 100,
        minCropBoxWidth: 100,
        minCropBoxHeight: 100,
        dragMode: "move",
        preview: previewList,
      } as any);
    };
  }

  selectFileRef.value!.value = "";
}

async function GetData() {
  // CROPPER.rotate(90);
  const cvs = CROPPER.getCroppedCanvas(props.getDataIoptions);
  const data: [string, Blob] = [] as any;
  data[0] = cvs.toDataURL(props.type, props.quality);

  //getCroppedCanvas方法可以将裁剪区域的数据转换成canvas数据
  await new Promise<void>((resolve) => {
    cvs.toBlob(
      (blob) => {
        data[1] = blob as Blob;
        //然后调用浏览器原生的toBlob方法将canvas数据转换成blob数据
        resolve();
        //  //之后就可以愉快的将blob数据发送至后端啦，可根据自己情况进行发送，我这里用的是axios
        //   const formData = new FormData();
        //   // 第三个参数为文件名，可选填.
        //   formData.append('croppedImage', blob/*, 'example.png' */);
        //   let config = {
        //       headers:{'Content-Type':'multipart/form-data'}
        //   }
      },
      props.type,
      props.quality
    );
  });
  const imageData = {
    key: Math.random(),
    base64: data[0],
    blob: data[1],
  };
  images.value.push(imageData);
  showCropper.value = false;
  loadings.value[images.value.length - 1] = true;
  try {
    if (props.beforeReady) {
      await props.beforeReady(imageData.blob);
    }
    emits("onReady", imageData);
    // 取消loading
    for (let i = 0; i < images.value.length; i++) {
      if (images.value[i].key === imageData.key) {
        loadings.value[i] = false;
        break;
      }
    }
  } catch (error) {
    // 上传失败 需要删除这个图片数据
    images.value = images.value.filter((item, i) => {
      loadings.value[i] = false;
      return item.key !== imageData.key;
    });
  }
}
const rotateLeft = () => {
  CROPPER.rotate(-90);
};
const rotateRight = () => {
  CROPPER.rotate(90);
};
const reset = () => {
  CROPPER.reset();
};
const zoomIn = () => {
  CROPPER.zoom(0.1);
};
const zoomOut = () => {
  CROPPER.zoom(-0.1);
};

defineExpose({
  getImageData: () =>
    images.value.map((item) => {
      return {
        base64: item.base64,
        blob: item.blob,
      };
    }),
  verify: () => {
    if (images.value.length === 0) {
      return false;
    }
    if (loadings.value.includes(true)) {
      return false;
    }
    return true;
  },
});
</script>
