import axios from 'axios'
import qs from 'qs'


//header 설정
const instance = axios.create({
    baseURL: '/',
    header: {
        'Content-Type': 'application/json',
    },
    responseType: 'application/json'
})

instance.defaults.headers.common = {
    'X=Requested-Width' : 'XMLHttpRequest'
}

instance.defaults.headers.get['Cache-Control'] = 'no-cache'
instance.defaults.headers.get['Pragma'] = 'no-cache'

instance.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  }, function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  });

// 응답 인터셉터 추가하기
instance.interceptors.response.use(function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  }, function (error) {
    console.log(error)
    const res = error.response
    try {
        const errorMessage = JSON.parse('{' + res.data.message + '}')
        switch (res.status) {
            case 500:
                alert(errorMessage.errorDescription)
                break;
        }
    } catch (error) {
      console.log(error)
    }
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  });


export default {
  get (url, params = {}, config = {}){
    return instance(Object.assign({
      method: 'GET',
      url,
      params: params,
      paramsSerializer: params => {
        return qs.stringify(params)
      }
    }, config))
  },
  post (url, params = {}, config = {}){
    return instance(Object.assign({
      method: 'POST',
      url,
      data: params,
    }, config))
  },
  put (url, params = {}, config = {}){
    return instance(Object.assign({
      method: 'PUT',
      url,
      data: params,
    }))
  },
  delete (url, params = {}, config = {}){
    return instance(Object.assign({
      method: 'DELETE',
      url,
      data: params,
    }))
  },
  patch (url, params = {}, config = {}){
    return instance(Object.assign({
      method: 'PATCH',
      url,
      data: params,
    }))
  },
}


