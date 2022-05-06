import axios from 'axios'

export const get_test = async (params: {[propName: string]: any}) => {
  try {
    const data = await axios.get('', { params })
    if (data.status === 200) {
      return {
        code: 1,
        message: '获取成功',
        data: data.data
      }
    } else {
      return {
        code: 0,
        message: data.statusText,
        body: null
      }
    }
  } catch (error) {
    return {
      code: 0,
      message: (error as any).stack,
      body: null
    }
  }
}