<template>
  <div class="container pt-5">
    <el-table
      :data="tableData"
      style="width:100%"
      :row-class-name="setRowClassName"
      max-height="300"
      :default-sort="{ prop: 'age', order: 'ascendant' }"
    >
      <el-table-column
        type="index"
        width="80"
        align="center"
        fixed
      />
      <el-table-column
        prop="date"
        label="Date"
        align="center"
        fixed
        sortable
      />
      <el-table-column
        prop="name"
        label="Name"
        align="center"
      />
      <el-table-column
        prop="age"
        label="Age"
        align="center"
        sortable
      />
      <el-table-column
        prop="address"
        label="Address"
        align="center"
      />
      <el-table-column
        prop="gender.value"
        label="Gender"
        align="center"
      />
      <el-table-column>
        <template v-slot:header>
          <input
            v-model="searchText"
            type="text"
            placeholder="search text"
          />
        </template>
        <template v-slot:default="scope">
          <el-button
            type="danger"
            @click="deleteRow(scope)"
          >
            remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const searchText = ref('')
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    age: 40,
    address: 'No. 189, Grove St, Los Angeles',
    gender: {
      value: 'male'
    }
  },
  {
    date: '2016-05-02',
    name: 'Merry',
    age: 32,
    address: 'No. 189, Grove St, Los Angeles',
    gender: {
      value: 'female'
    }
  },
  {
    date: '2016-05-04',
    name: 'Joe',
    age: 70,
    address: 'No. 189, Grove St, Los Angeles',
    gender: {
      value: 'male'
    }
  },
  {
    date: '2016-05-01',
    name: 'Alex',
    age: 18,
    address: 'No. 189, Grove St, Los Angeles',
    gender: {
      value: 'female'
    }
  },
])

const setRowClassName = () => {
  // const { row } = payload
  // return row.age > 35 ? 'old' : 'young'
  return ''
}

const deleteRow = (payload) => {
  console.log(payload)
  const { $index } = payload
  tableData.value.splice($index, 1)
}

useHead({
  title: 'elTable'
})
</script>

<style lang="scss">
.el-table {
  .young {
    background-color: lightgreen;
  }
}

.el-table__body tr.hover-row>td.el-table__cell {
  background-color: transparent;
}
</style>