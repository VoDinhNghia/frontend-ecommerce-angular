export interface IpropModalCommon {
  dispatch?: any
  isShowModal?: boolean | any
  onCloseModal?: Function | any
  type?: string
}

export interface IparamsFetchList {
  searchKey?: string
  page?: number
  limit?: number
}
