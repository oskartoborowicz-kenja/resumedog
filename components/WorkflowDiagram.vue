<template>
  <div class="workflow">
    <div class="step">
      <div class="icon upload"><i class="fa-solid fa-upload"></i></div>
      <span class="label">{{ $t('workflow.upload') }}</span>
    </div>

    <div class="step">
      <div class="icon config"><i class="fa-solid fa-sliders"></i></div>
      <span class="label">{{ $t('workflow.configure') }}</span>
    </div>

    <div class="step">
      <div class="icon ai"><i class="fa-solid fa-microchip"></i></div>
      <span class="label">{{ $t('workflow.aiProcess') }}</span>
    </div>

    <div class="step">
      <div class="icon review"><i class="fa-solid fa-circle-check"></i></div>
      <span class="label">{{ $t('workflow.review') }}</span>
    </div>

    <div class="step">
      <div class="icon export"><i class="fa-solid fa-file-export"></i></div>
      <span class="label">{{ $t('workflow.export') }}</span>
    </div>
  </div>
</template>

<style scoped>
.workflow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
}

.icon {
  width: 72px;
  height: 72px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  border: 1.5px solid transparent;
  transition: transform .2s ease;
}

.step:hover .icon {
  transform: translateY(-3px);
}

.label {
  margin-top: 0.85rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1;
}


.upload { color: #2563EB; background: #DBEAFE; border-color: #BFDBFE; }
.config  { color: #0891B2; background: #CFFAFE; border-color: #A5F3FC; }
.ai      { color: #7C3AED; background: #EDE9FE; border-color: #DDD6FE; }
.review  { color: #16A34A; background: #DCFCE7; border-color: #BBF7D0; }
.export  { color: #0284C7; background: #DBEAFE; border-color: #BAE6FD; }

@media (max-width: 900px) {
  .workflow {
    flex-direction: column;
    gap: 1.75rem;
  }
}
</style>
