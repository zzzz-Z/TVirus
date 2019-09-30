import { VNode } from 'vue';

export interface DropDownEvent {
  /**
   * 点击菜单项时触发
   */
  'on-click'?(value: string): void
  /**
   * 菜单显示状态改变时调用
   */
  'on-visible-change'?(value: boolean): void
}

export interface DropDownProps {
  /**
   * 触发方式，可选值为 hover（悬停）click（点击）contextMenu（右键）custom（自定义），使用 custom 时，需配合 visible 一起使用
   * @default hover
   */
  trigger?: 'hover' | 'click' | 'custom' | 'contextMenu';
  /**
   * 手动控制下拉框的显示，在 trigger = 'custom' 时使用
   * @default false
   */
  visible?: boolean;
  /**
   * 下拉菜单出现的位置，可选值为
   * top，top-start，top-end，bottom，bottom-start，bottom-end，
   * left，left-start，left-end，right，right-start，right-end
   * @default bottom
   */
  // tslint:disable-next-line:max-line-length
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  /**
   * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
   * @default false
   */
  transfer?: boolean;
  /**
   *
   */
  transferClassName?: string
  /**
   * @default false
   */
  stopPropagation?: boolean
  /**
   * 开启 transfer 时，给浮层添加额外的 class 名称
   */
  'transfer-class-name'?: string;
  /**
   * 是否开启 stop-propagation
   * @default false
   */
  'stop-propagation'?: boolean;
  // slot插槽 || Vnode props
  /**
   * 列表内容，一般由 DropdownMenu 承担
   */
  list?: VNode[];
}

// tslint:disable-next-line:no-empty-interface
export interface DropdownMenu {
}

export interface DropdownItem {
  /**
   * 用来标识这一项
   */
  name?: string;
  /**
   * 禁用该项
   * @default false
   */
  disabled?: boolean;
  /**
   * 显示分割线
   * @default false
   */
  divided?: boolean;
  /**
   * 标记该项为选中状态
   * @default false
   */
  selected?: boolean;
}
