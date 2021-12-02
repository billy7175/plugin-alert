/* eslint-disable */
import Vue from 'vue'
import MessageWrapper from '../components/MessageBox'

const MESSAGE_PLACEMENTS = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right'
]

function makeWrappers(wrappers, placements) {
  placements = placements || MESSAGE_PLACEMENTS
  placements.forEach(placement => {
    wrappers.push(
      new MainComponent({
        propsData: { placement }
      }).$mount()
    )
  })
}

function findComponentByPlacement(wrappers, placement) {
  return wrappers.find(comp => comp.placement === placement)
}

function renederToBody(wrappers) {
  wrappers.forEach(wrapper => {
    document.body.appendChild(wrapper.$el)
  })
}

const MainComponent = Vue.extend(MessageWrapper)
const wrappers = []

makeWrappers(wrappers)
renederToBody(wrappers)

let id = 0
const references = []

const Message = function(options = {}) {
  const placement = options.placement || 'top-left'
  const instanceId = `ti-message-${id++}`
  references.push(instanceId)
  const wrapper = findComponentByPlacement(wrappers, placement)
  wrapper.pushMessage({ options, id: instanceId })
}

export { MESSAGE_PLACEMENTS }

export default Message
