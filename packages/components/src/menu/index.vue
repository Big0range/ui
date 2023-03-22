<template>
  <div class="w-320 leading-50">
    <div
      v-for="(item, index) in props.list"
      :key="index"
      class="mb-12 shadow-sm cursor-pointer"
    >
      <div
        class="relative flex items-center bg-white shadow-sm"
        :class="{ active1: clickIndex.startsWith(`i-${item.value}`) }"
        @click="change(`i-${item.value}`, item)"
      >
        <img
          src="@/assets/images/down.png"
          class="w-24 h-24 mx-12 icon-l"
          alt=""
        />
        <div class="flex-1 transition-all ellipsis-1">
          {{ item.label }}
          {{ item.count !== undefined ? `(${item.count})` : '' }}
        </div>
        <div class="flex items-center w-10 mx-12">
          <el-dropdown
            v-if="props.edit"
            trigger="click"
            @command="handleCommand"
          >
            <img
              class="w-10 cursor-pointer icon-r"
              src="@/assets/images/edit.png"
              @click.stop=""
            />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :command="{ type: 'a', id: item.value }"
                  >新增科室/团队
                </el-dropdown-item>
                <el-dropdown-item :command="{ type: 'b', id: item.value }"
                  >查看信息</el-dropdown-item
                >
                <span v-hasPerm="'sys:XZYY'">
                  <el-dropdown-item :command="{ type: 'c', id: item.value }"
                    >修改信息</el-dropdown-item
                  >
                </span>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div
        v-if="clickIndex.startsWith(`i-${item.value}`)"
        class="overflow-auto bg-f7 scrollbar"
        :style="{ maxHeight: (props.maxHeight || 540) + 'px' }"
      >
        <div v-for="item2 in item.children" :key="item2.value">
          <div
            class="flex pl-32"
            @click="change(`i-${item.value},${item2.value}`, item2)"
            :class="{
              active2: clickIndex === `i-${item.value},${item2.value}`,
              show: showIndex === `i-${item.value},${item2.value}`
            }"
          >
            <div class="flex-1 ellipsis-1">
              {{ item2.label }}
              {{ item2.count !== undefined ? `(${item2.count})` : '' }}
            </div>
            <div class="inline-block mx-12">
              <el-dropdown
                v-if="props.edit"
                trigger="click"
                @command="updateDept"
              >
                <img
                  @click.stop=""
                  class="cursor-pointer w-14 icon2-r"
                  src="@/assets/images/other.png"
                />
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item :command="{ type: 'a', id: item2.value }"
                      >查看信息</el-dropdown-item
                    >
                    <el-dropdown-item :command="{ type: 'b', id: item2.value }"
                      >修改信息</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <img
                src="@/assets/images/arrow-down.png"
                class="w-16 transition-all arrow"
                @click.stop="
                  showIndex === `i-${item.value},${item2.value}`
                    ? (showIndex = '')
                    : (showIndex = `i-${item.value},${item2.value}`)
                "
                v-else-if="item2.children && item2.children.length > 0"
              />
            </div>
          </div>

          <template v-if="showIndex === `i-${item.value},${item2.value}`">
            <div
              v-for="item3 in item2.children"
              :key="item3.value"
              @click="
                change(`i-${item.value},${item2.value},${item3.value}`, item3)
              "
              :class="{
                active2:
                  clickIndex === `i-${item.value},${item2.value},${item3.value}`
              }"
              class="pl-48"
            >
              {{ item3.label }}
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <AddDept ref="addDeptRef" @change="emit('update')" />
  <AddHospital ref="addHospitalRef" @change="emit('update')" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import AddDept, {
  AddDeptAPI
} from '@/views/system/organization/components/AddDept.vue';
import AddHospital, {
  AddHospitalAPI
} from '@/views/system/organization/components/AddHospital.vue';
export interface IOptions {
  label: string;
  value: string | number;
  count?: number;
  children?: IOptions[];
}
const addHospitalRef = ref<AddHospitalAPI>();
const addDeptRef = ref<AddDeptAPI>();

const props = defineProps<{
  edit: boolean;
  list: IOptions[];
  maxHeight?: number;
}>();
const showIndex = ref('');

const clickIndex = ref(
  `i-${props.list[0].value},${(props.list[0] as any).children[0].value}`
);
const emit = defineEmits<{
  (event: 'change', id: string, item: IOptions): void;
  (event: 'update'): void;
}>();
emit(
  'change',
  clickIndex.value.replace('i-', ''),
  (props.list[0].children as any)[0]
);

const change = (value: string, item: IOptions) => {
  clickIndex.value = value;
  emit('change', clickIndex.value.replace('i-', ''), item);
};
const updateDept = (command: { type: 'a' | 'b'; id: number | string }) => {
  switch (command.type) {
    case 'a':
      addDeptRef.value?.show({ id: command.id, readonly: true });
      // 查看信息(科室)
      break;
    case 'b':
      addDeptRef.value?.show({ id: command.id, readonly: false });
      // 修改信息(科室)
      break;
  }
};
const handleCommand = (command: {
  type: 'a' | 'b' | 'c';
  id: number | string;
}) => {
  console.log(command);
  switch (command.type) {
    case 'a':
      // 新增科室/团队
      addDeptRef.value?.show();
      break;
    case 'b':
      addHospitalRef.value?.show({ id: command.id, readonly: true });
      // 查看信息(医院)
      break;
    case 'c':
      addHospitalRef.value?.show({ id: command.id, readonly: false });
      // 修改信息(医院)
      break;
  }
};
</script>

<style lang="scss" scoped>
.active1,
.active2 {
  color: #0e7afb;
}
.icon-l {
  transform: rotate(0);
}
.active1 {
  .icon-l,
  .icon-r {
    transition: all ease 0.2s;
  }
  .icon-l {
    transform: rotate(180deg);
  }
  .icon-r {
    transform: rotate(180deg);
  }
}
// absolute w-24 h-24  left-6 top-1/2 icon-l

.active2 {
  background-color: #e6f7ff;
}
.icon2-r {
  filter: grayscale(1);
  transform: rotate(90deg);
  position: relative;
  top: 18px;
}
.arrow {
  transform: rotate(180deg);
}
.active2 {
  .icon2-r {
    filter: grayscale(0);
  }
}
.show {
  .arrow {
    transform: rotate(0);
  }
}
</style>
