import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Main </div>
          <div><Link to="/dashboard/profile/be4b8e46-04db-4947-9dde-e69216b5f16c"> Go To Profile </Link></div>
          <div><Link to="/dasboard"> Go To Root </Link></div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
