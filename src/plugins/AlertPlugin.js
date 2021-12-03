// import Vue from 'vue'
import MessageBox from '../components/MessageBox'
export default {
    install(Vue) {
        // this.$alert() 호출시 실행
        const MessageModal = Vue.extend(MessageBox)
        const instance = new MessageModal();
        instance.$mount(document.createElement('div')); //  
        instance.$mount(); // createElement('div') 차이 숙지
        const defaultMessage = "출력 문구를 입력해주세요."
        const defaultType = "success"
        const defaultButtonText = {
            confirmText: "확인",
            cancelText: "취소"
        }

        // 메시지텍스트, 타입, 버튼텍스트(취소 및 확인)
        Vue.prototype.$alert = function (message = defaultMessage, type = defaultType, object = defaultButtonText) {
            if(!instance.isShow) instance.isShow = !instance.isShow
            instance.message = message;
            instance.confirmText = object.confirmText;
            instance.cancelText = object.cancelText;
            instance.type = type || 'success';
            instance.isShow = true;

            // instance $el을 body에  append
            document.body.appendChild(instance.$el);  // APPEND MODAL TO BODY

            const confirmBtn = instance.$el.querySelector('.-confirm')
            const cancelBtn = instance.$el.querySelector('.-cancel')
            const modal = instance 

            return new Promise((resolve, reject) => {
                const clickConfirm = () => {
                    modal.$el.remove()
                    resolve(true)
                }
                
                confirmBtn.addEventListener('click', clickConfirm)
                confirmBtn.removeEventListener('mouseenter', clickConfirm)

                if (cancelBtn) { // type 유형에 따른 취소버튼 확인
                    cancelBtn.addEventListener('click', () => {
                        modal.$el.remove()
                        reject(false)
                    })
                }
            })
        }
    }
};