<template>
  <div class="p-3">
    <Form
      ref="myForm"
      :validation-schema="formRules"
      @submit="onSubmit"
      @invalid-submit="onInvalidSubmit"
    >
      <div>
        <InputField
          v-model="formValues.email"
          field-title="信箱"
          field-name="email"
          input-type="text"
        />
        <SelectField
          v-model="formValues.gender"
          field-title="性別"
          field-name="gender"
          :select-list="genderList"
        />
        <TextareaField
          v-model="formValues.remark"
          field-title="備註"
          field-name="remark"
        />
      </div>
      <button
        type="submit"
        class="mt-3 rounded border border-black px-3 py-1"
      >
        submit
      </button>
    </Form>
    <button
      class="mt-3 rounded border border-black px-3 py-1"
      @click.stop="resetFormHandler"
    >
      reset
    </button>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate'
import InputField from '@/components/ValidateForm/InputFiled.vue'
import SelectField from '@/components/ValidateForm/SelectField.vue'
import TextareaField from '@/components/ValidateForm/TextareaField.vue'

const myForm = ref(null)

const genderList = ref([
  {
    title: '請選擇',
    value: ''
  },
  {
    title: '男',
    value: 'm'
  },
  {
    title: '女',
    value: 'f'
  },
])

const formValues = ref({
  email: '',
  gender: '',
  remark: ''
})

const formRules = ref({
  email: 'required|email',
  gender: 'required',
  remark: 'required'
})

const onSubmit = () => {
  console.log(formValues)
}

const onInvalidSubmit = (payload) => {
  console.log(payload)
}

const resetFormHandler = () => {
  myForm.value.resetForm({
    values: {
      email: '',
      password: '',
    }
  })
  console.log(formValues)
}

onMounted(() => {

})

useHead({
  title: 'nestedDialog'
})

</script>

<style lang="scss">
  input,
  select,
  textarea {
    border: 1px solid black !important;
    border-radius: 4px !important;
    padding: 3px 12px !important;
  }
</style>