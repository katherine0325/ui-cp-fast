<template>
  <div class="home">
      <header class="middle-section">
        <div style="font-size: 30px;">
          <img src="../../assets/logo.png" style="width: 40px;margin-right: -6px;" />
          CPFast
        </div>
        <div style="margin-left: auto;display: flex;">
          <a class="item" @click="goPrice()">价格</a>
          <a class="item" @click="goCase()">案例</a>
          <a class="item" style="color: #F5C147;" href="#/doc">文档</a>
        </div>
      </header>

      <section class="middle-section text-center">
        <span style="padding: 10px;font-size: 30px;font-weight: bold;line-height: 2;background-color: #F5C147;color: #141616;border-radius: 5px;">
          一个对开发者友好的
        </span>
        <div style="font-size: 50px;font-weight: bold;line-height: 3;">
          <span style="font-size: 60px;color: #68A630;">“</span>
          便捷Chrome插件框架
        </div>
        <div style="margin-bottom: 30px;">Vue3、Antd、tailwindcss、各种npm包即装即用</div>
        <div>
          <img src="@/assets/Xnip2024-10-17_18-31-00.jpg" alt="" style="width: 800px;border-radius: 5px;" />
        </div>
      </section>

      <section style="background-color: #0E100F;margin: 30px 0;padding: 50px 0;">
        <div class="middle-section text-center">
          <div class="title">为什么使用CPFast ？</div>
          <div style="display: flex;justify-content: space-between;margin-top: 60px;">
            <div style="width: 250px;">
              <a-icon type="fire" theme="filled" style="color: #68A630;" />
              <p style="margin-top: 30px;">告别配置项目框架，专注业务代码</p>
            </div>
            <div style="width: 250px;">
              <a-icon type="heart" theme="filled" style="color: #68A630;" />
              <p style="margin-top: 30px;">直接使用vue3/antd/tailwindcss等，方便快捷</p>
            </div>
            <div style="width: 250px;">
              <a-icon type="folder" theme="filled" style="color: #68A630;" />
              <p style="margin-top: 30px;">各种npm包的webpack配置已准备好，即装即用</p>
            </div>
          </div>
        </div>
      </section>

      <section class="middle-section" style="padding: 80px 0;">
        <div class="title">适用人群</div>
        <div style="margin-top: 30px;">
          <p>🔥 想要学习Chrome插件的开发者</p>
          <p>🔥 有功能想要实现但不想在配置框架上花时间的开发者</p>
          <p>🔥 批量快速开发插件的从业人员</p>
        </div>
      </section>

      <section style="background-color: #0F0F0F;padding: 80px 0;">
        <div class="title text-center" style="margin-bottom: 30px;">价格</div>
        <div style="width: 500px;margin: 0 auto;background-color: #212121;padding: 40px;border: 1px solid #F5C147;border-radius: 8px;">
          <div style="font-size: 40px;font-weight: bold;">¥ 68元</div>
          <div style="margin-top: 20px;">
            <p>
              ✔  永久使用
              <span style="font-size: 12px;color: #777;margin-left: 4px;">
                一次购买，无其他额外收费
              </span>
            </p>
            <p>
              ✔  永久升级
              <span style="font-size: 12px;color: #777;margin-left: 4px;">
                后续升级版本可免费下载
              </span>
            </p>
            <p>
              ✔  永久支持
              <span style="font-size: 12px;color: #777;margin-left: 4px;">
                框架遇到使用问题可以问工程师，将在一到两个工作日内回复
              </span>
            </p>
          </div>
          <button class="btn" style="width: 100%;margin-top: 20px;" @click="goTaobao()">
            购 &nbsp;&nbsp;&nbsp;&nbsp; 买
          </button>
        </div>
      </section>

      <section class="middle-section text-center" style="padding: 100px 0;">
        <div class="title">案例</div>
        <button class="btn" style="margin-top: 20px;" @click="downloadCase()">下 &nbsp; 载</button>
        <div style="font-size: 12px;color: #666666;margin-left: 4px;margin-top: 10px;">这里是Build好的Demo案例</div>
        <div style="width: 350px;margin: 0 auto;margin-top: 20px;padding: 30px;background-color: rgba(255, 255, 255, .1);border-radius: 8px;color: #0F0F0F;text-align: left;">
          <div style="font-size: 14px;">1. 打开extends</div>
          <div style="font-size: 14px;">2. 打开开发者模式</div>
          <div style="font-size: 14px;">3. 解压并拖动文件夹到浏览器中央安装好插件</div>
          <div style="font-size: 14px;">4. 点击插件图标查看效果</div>
        </div>
      </section>

      <footer>
        <!-- <div style="font-size: 14px;margin-bottom: 20px;">邮箱：534152838@qq.com</div> -->
        <div style="font-size: 14px;margin-bottom: 20px;">本框架最新版本：v1.0.0</div>
        <div style="font-size: 14px;color: #666666;">© Copyright 2024-2034 CPFast</div>
      </footer>
  </div>
</template>

<script src="./home.js"></script>
<style scoped src="./home.css"></style>
