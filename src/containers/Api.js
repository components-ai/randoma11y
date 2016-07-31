import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Api = React.createClass({
  propTypes: {
    location: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired
  },

  contextTypes: {
    router: PropTypes.object
  },

  render () {
    /* eslint-disable react/jsx-indent */
    return (
      <div className='sans-serif relative'>
        <Header />
        <div className='measure-wide pa4'>
          <h1 className='f3 b pv3'>
            Application Programming Interface
          </h1>
          <p className='mid-gray lh-copy'>
            <a href='http://randoma11y.com' className='link'>randoma11y</a> offers a fully
            featured <a href='https://github.com/johnotander/random-a11y-api' className='link'>RESTful API</a>.
            All our data is open and provided for no charge. 3rd party
            applications can vote or display accessible combinations by querying
            our JSON API.
          </p>
        </div>
        <h3 className='ph4'>Stats</h3>
        <p className='measure-wide mid-gray lh-copy ph4'>
          Get the latest stats for randoma11y with a <code>GET /stats</code>.
        </p>
        <div className='lh-copy pa4 bg-near-white' style={{wordBreak: 'break-all'}}>
          <p className='code'>
            $ curl <a href='http://randoma11y.com/stats' className='link'>randoma11y.com/stats</a><br /><br />
            =&gt;
            &#123;<br />
              &nbsp; combos: 69071,<br />
              &nbsp; votes: 69053,<br />
              &nbsp; votes_per_combo: 1.000260669340941,<br />
              &nbsp; up_votes: 35651,<br />
              &nbsp; down_votes: 33402,<br />
              &nbsp; latest_20: [...],<br />
              &nbsp; most_active_20: [...]<br />
            &#125;
          </p>
        </div>
        <h3 className='ph4 pt3'>Combinations</h3>
        <p className='measure-wide mid-gray lh-copy ph4'>
          The <code>Combo</code> resource is the bread and butter of randoma11y.
          It consists of two hex colors and <code>has_many :votes</code>.
        </p>
        <div className='lh-copy pa4 bg-near-white' style={{wordBreak: 'break-all'}}>
          <p className='code'>irb(main):001:0&gt; Combo.first<br /><br />
Combo Load (2.0ms)  SELECT  "combos".* FROM "combos" ORDER BY "combos"."id" ASC LIMIT $1  [["LIMIT", 1]]<br /><br />
=&gt; #&lt;Combo id: 1, color_one: "#111", color_two: "#fafafa", created_at: "2016-05-29 17:31:09", updated_at: "2016-06-03 15:34:04", contrast: nil, votes_count: 4>
          </p>
        </div>
        <h5 className='ph4 pt4 f6 code'>GET /combos</h5>
        <p className='measure-wide mid-gray lh-copy ph4'>
          The <code>Combos</code> endpoint exposes a list of <code>Combos</code>.
          It is paginated with <code>page</code> and <code>per_page</code> query params.
        </p>
        <div className='lh-copy pa4 bg-near-white' style={{wordBreak: 'break-all'}}>
          <p className='code'>
          $ curl <a href='http://randoma11y.com/combos' className='link'>randoma11y.com/combos</a> <br /><br />
          =&gt; [...]
          </p>
        </div>
        <h5 className='ph4 pt4 f6 code'>GET /combos?hex=ffffff</h5>
        <p className='measure-wide mid-gray lh-copy ph4'>
          Filter <code>Combos</code> based on a particular color.
        </p>
        <div className='lh-copy pa4 bg-near-white' style={{wordBreak: 'break-all'}}>
          <p className='code'>
          $ curl <a href='http://randoma11y.com/combos?hex=ffffff' className='link'>randoma11y.com/combos?hex=ffffff</a> <br /><br />
          =&gt; [...]
          </p>
        </div>
        <h5 className='ph4 pt4 f6 code'>GET /combos?page=3&per_page=50</h5>
        <p className='measure-wide mid-gray lh-copy ph4'>
          Grab the 3rd page of 50 <code>Combos</code>.
        </p>
        <div className='lh-copy pa4 bg-near-white' style={{wordBreak: 'break-all'}}>
          <p className='code'>
          $ curl <a href='http://randoma11y.com/combos?page=3&per_page=50' className='link'>randoma11y.com/combos?page=3&per_page=50</a> <br /><br />
          =&gt; [...]
          </p>
        </div>
        <h5 className='ph4 pt4 f6 code'>GET /combos/top</h5>
        <p className='measure-wide mid-gray lh-copy ph4'>
          Grab the top 100 <code>Combos</code> based on the number of up votes.
          This also includes associated <code>Votes</code> for each <code>Combo</code>.
        </p>
        <div className='lh-copy pa4 bg-near-white' style={{wordBreak: 'break-all'}}>
          <p className='code'>
          $ curl <a href='http://randoma11y.com/combos/top' className='link'>randoma11y.com/combos/top</a> <br /><br />
          =&gt; [...]
          </p>
        </div>
        <h5 className='ph4 pt4 f6 code'>GET /combos/active</h5>
        <p className='measure-wide mid-gray lh-copy ph4'>
          Grab the most active 100 <code>Combos</code>.
        </p>
        <div className='lh-copy pa4 bg-near-white' style={{wordBreak: 'break-all'}}>
          <p className='code'>
          $ curl <a href='http://randoma11y.com/combos/active' className='link'>randoma11y.com/combos/active</a> <br /><br />
          =&gt; [...]
          </p>
        </div>
        <Footer />
      </div>
    )
    /* eslint-enable react/jsx-indent */
  }
})

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(routeActions.push(route))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Api)
