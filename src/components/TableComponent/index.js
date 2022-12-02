import {Component} from 'react'
import sorter from 'sort-nested-json'
import RowComponent from '../RowComponent'
import RemainingRows from '../RemainingRows'

import './index.css'

class TableComponent extends Component {
  state = {mainList: []}

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    const {item} = this.props
    this.setState({mainList: item})
  }

  byDate = (a, b) => new Date(a.joiningDate) - new Date(b.joiningDate)

  filterItems = uid => {
    const {item} = this.props

    if (uid === 'name') {
      this.setState({
        mainList: sorter.sort(item).asc('person.name'),
      })
    } else if (uid === 'city') {
      this.setState({
        mainList: sorter.sort(item).asc('city'),
      })
    } else if (uid === 'email') {
      this.setState({
        mainList: sorter.sort(item).asc('email'),
      })
    } else if (uid === 'joiningDate') {
      this.setState({
        mainList: item.sort(this.byDate),
      })
    } else if (uid === 'role') {
      this.setState({
        mainList: sorter.sort(item).asc('role'),
      })
    }
  }

  renderCases = () => {
    const {cases} = this.props

    return cases.map(each => (
      <RowComponent item={each} key={each.id} filterItems={this.filterItems} />
    ))
  }

  renderRemainingRows = () => {
    const {mainList} = this.state
    const {cases} = this.props
    return mainList.map(each => (
      <RemainingRows item={each} key={each.joiningDate} filtrs={cases} />
    ))
  }

  render() {
    return (
      <table className="main-table-card">
        <tr className="row1">{this.renderCases()}</tr>
        {this.renderRemainingRows()}
      </table>
    )
  }
}

export default TableComponent
