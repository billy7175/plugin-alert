// import Vue from 'vue'
import MessageBox from '../components/MessageBox'
export default  {
    install(Vue) {
        const MainComponent = Vue.extend(MessageBox)
        const instance = new MainComponent();
        //  $mount(document.createElement('div')) 는 왜 필요한가 ????

        instance.$mount(document.createElement('div')); // [1]
        instance.$mount(); // [2] 일번과 이번 둘의 차이는 ????? //
        const defaultMessage = "출력 문구를 입력해주세요."
        const defaultType = "success"
        const defaultButtonText = {
            confirmButtonText : "확인",
            confirmCancelText: "취소"
        }
        Vue.prototype.$alert = function (message = defaultMessage , type = defaultType , object = defaultButtonText) {
            instance.message = message || '메시지를 입력해주세요.'
            instance.confirmText = object.confirmText || '확인'
            instance.cancelText = object.confirmText || '취소'
            instance.type = type || 'success'
            document.body.appendChild(instance.$el)  // APPEND MODAL TO BODY

            const confirmBtn = instance.$el.querySelector('.-confirm')
            const cancelBtn = instance.$el.querySelector('.-cancel')
            const modal = instance // 1번 방법, 2번 방법 구현해보기(APP 컴포넌트에서 if 분기처리)
     
            return new Promise((resolve, reject) => {
                confirmBtn.addEventListener('click', () => {
                    modal.$el.remove()
                    resolve('콜백 확인 전달!~')
                })

                if (cancelBtn) {
                    cancelBtn.addEventListener('click', () => {
                        modal.$el.remove()
                        reject('콜백 취소 전달~~!!!')
                    })
                }
            })
        }
    }
};