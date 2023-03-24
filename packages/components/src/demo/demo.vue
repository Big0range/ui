<template>
  <div class="bi-button">
    <div class="previewBox" ref="previewBoxRef"></div>
    <div class="previewBoxRound previewBox" ref="previewBoxRoundRef"></div>
    <input
      type="file"
      accept="image/,.png,.jpg,.jpeg,"
      ref="selectFileRef"
      class="bi-button-input"
      @change="loadingImg"
    />
    <div @click="uploadImg">132</div>
    <ElDialog width="900" v-model="showCropper">
      <div class="bi-button-container">
        <div class="bi-button-container-left">
          <img id="cropImg" ref="cropImgRef" />
        </div>
        <div class="bi-button-container-right">
          <div class="previewText">裁剪预览</div>
          <div class="previewBox" ref="previewBoxRef"></div>
          <div class="previewBoxRound previewBox" ref="previewBoxRoundRef"></div>
        </div>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button-group>
            <el-button>Previous Page</el-button>
            <el-button> Next Page </el-button>
          </el-button-group>
        </div>
      </template>
    </ElDialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElDialog, ElButtonGroup, ElButton } from "element-plus";
import "./demo.scss";
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";
const selectFileRef = ref<HTMLInputElement>();
const cropImgRef = ref<HTMLImageElement>();

const previewBoxRef = ref<HTMLElement>();
const previewBoxRoundRef = ref<HTMLElement>();
const showCropper = ref(false);
const uploadImg = () => {
  selectFileRef.value!.click();
};
let CROPPER: Cropper;
function loadingImg(eve: any) {
  showCropper.value = true;
  CROPPER?.destroy();
  //读取上传文件
  let reader = new FileReader();
  if (eve.target!.files[0]) {
    //readAsDataURL方法可以将File对象转化为data:URL格式的字符串（base64编码）
    reader.readAsDataURL(eve.target.files[0]);
    reader.onload = (e) => {
      let dataURL = reader.result;
      //将img的src改为刚上传的文件的转换格式
      cropImgRef.value!.src = dataURL as any;

      //创建cropper实例-----------------------------------------
      CROPPER = new Cropper(cropImgRef.value!, {
        aspectRatio: 16 / 16,
        viewMode: 1,
        minContainerWidth: 100,
        minContainerHeight: 100,
        minCropBoxWidth: 100,
        minCropBoxHeight: 100,
        dragMode: "move",
        preview: [previewBoxRoundRef.value, previewBoxRef.value],
      } as any);
    };
  }

  selectFileRef.value!.value = "";
}
</script>
