<template>
  <div class="components-container board">
    <Kanban :key="1" class="kanban todo" :list="list1" :options="options" header-text="Todo"/>
    <Kanban :key="2" class="kanban working" :list="list2" :options="options" header-text="Working"/>
    <Kanban :key="3" class="kanban done" :list="list3" :options="options" header-text="Done"/>
  </div>
</template>
<script>
  import Kanban from '@/components/Kanban'

  export default {
    name: 'dragKanban-demo',
    components: {
      Kanban
    },
    data () {
      return {
        options: {
          group: 'mission'
        },
        list1: [
          { name: 'Mission', id: 1 },
          { name: 'Mission', id: 2 },
          { name: 'Mission', id: 3 },
          { name: 'Mission', id: 4 }
        ],
        list2: [
          { name: 'Mission', id: 5 },
          { name: 'Mission', id: 6 },
          { name: 'Mission', id: 7 }
        ],
        list3: [
          { name: 'Mission', id: 8 },
          { name: 'Mission', id: 9 },
          { name: 'Mission', id: 10 }
        ]
      }
    }
  }
</script>
<style lang="scss">
  .board {
    width: 1000px;
    margin-left: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-start;
  }

  .kanban {
    &.todo {
      .board-column-header {
        background: #4A9FF9;
      }
    }
    &.working {
      .board-column-header {
        background: #f9944a;
      }
    }
    &.done {
      .board-column-header {
        background: #2ac06d;
      }
    }
  }
</style>

