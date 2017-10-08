const Mock = require('mockjs') // generate random data from template
const config = require('../utils/config') // config data

const { apiPrefix } = config

let foodListData = Mock.mock({
  'data|80-100': [
    {
      id: '@id',
      name: '@string("lower", 1, 20)',
      category: '@string("lower", 1, 10)',
      'energy|0-1000': 1,
      avatar () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.name.substr(0, 1))
      },
    },
  ],
})


let database = foodListData.data

module.exports = {

  [`GET ${apiPrefix}/food`] (req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = database
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) { // check if {other} has property {key}
        newData = newData.filter((item) => {
          if ({}.hasOwnProperty.call(item, key)) {
            return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
          }
          return true
        })
      }
    }

    res.status(200).json({
      data: newData.slice((page - 1) * pageSize, page * pageSize),
      total: newData.length,
    })
  },
}
