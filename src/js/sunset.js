!(function (e) {
  typeof module === 'object' && module.exports ?
    (e.default = e, module.exports = e) :
    (typeof define === 'function' && define.amd ?
      define('highcharts/themes/sunset', ['highcharts'], o => {
        return e(o), e.Highcharts = o, e
      }) :
      e(typeof Highcharts === 'undefined' ? void 0 : Highcharts))
})(e => {
  const o = e ? e._modules : {}; function t(e, o, t, n) {
    e.hasOwnProperty(o) || (e[o] = n.apply(null, t), typeof CustomEvent === 'function' && window.dispatchEvent(new CustomEvent('HighchartsModuleLoaded', { detail: { path: o, module: e[o] } })))
  }

  t(o, 'Extensions/Themes/Sunset.js', [o['Core/Defaults.js']], e => {
    let o; let t; const { setOptions: n } = e; return (t = o ||= {}).options = {
      colors: ['#FDD089', '#FF7F79', '#A0446E', '#251535'], colorAxis: { maxColor: '#60042E', minColor: '#FDD089' }, plotOptions: { map: { nullColor: '#fefefc' } }, navigator: { series: { color: '#FF7F79', lineColor: '#A0446E' } }
    }, t.apply = function () {
      n(t.options)
    }, o
  }), t(o, 'masters/themes/sunset.src.js', [o['Core/Globals.js'], o['Extensions/Themes/Sunset.js']], (e, o) => {
    return e.theme = o.options, o.apply(), e
  })
})
