declare interface Window {
  createUnityInstance: (el: HTMLElement, params: Object) => Promise<any>
  unityInstance: any
}