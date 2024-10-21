export class Loading {
  static show (event) {
    this.loading = event.$message.loading('加载中...', 0)
  }

  static hide () {
    setTimeout(this.loading, 0)
  }
}
