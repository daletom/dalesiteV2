<template>
  <div>
    <h1>Compare Paint Changes to CC's Living Room</h1>
    <h2>Use the slider to reveal the before and after image.</h2>
      <image-compare :before="before" :after="after" full isZoomable isSwitchable isDraggable>
        <i class="fa fa-angle-left" aria-hidden="true" slot="icon-left"></i>
        <i class="fa fa-angle-right" aria-hidden="true" slot="icon-right"></i>
      </image-compare>
  </div>
</template>

