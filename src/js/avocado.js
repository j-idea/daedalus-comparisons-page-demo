!(function (o) {
  typeof module === 'object' && module.exports ?
    (o.default = o, module.exports = o) :
    (typeof define === 'function' && define.amd ?
      define('highcharts/themes/avocado', ['highcharts'], e => {
        return o(e), o.Highcharts = e, o
      }) :
      o(typeof Highcharts === 'undefined' ? void 0 : Highcharts))
})(o => {
  const e = o ? o._modules : {}; function t(o, e, t, n) {
    o.hasOwnProperty(e) || (o[e] = n.apply(null, t), typeof CustomEvent === 'function' && window.dispatchEvent(new CustomEvent('HighchartsModuleLoaded', { detail: { path: e, module: o[e] } })))
  }

  t(e, 'Extensions/Themes/Avocado.js', [e['Core/Defaults.js']], o => {
    let e; let t; const { setOptions: n } = o; return (t = e ||= {}).options = {
      colors: ['#F3E796', '#95C471', '#35729E', '#251735'], colorAxis: { maxColor: '#05426E', minColor: '#F3E796' }, plotOptions: { map: { nullColor: '#FCFEFE' } }, navigator: { maskFill: 'rgba(170, 205, 170, 0.5)', series: { color: '#95C471', lineColor: '#35729E' } }
    }, t.apply = function () {
      n(t.options)
    }, e
  }), t(e, 'masters/themes/avocado.src.js', [e['Core/Globals.js'], e['Extensions/Themes/Avocado.js']], (o, e) => {
    return o.theme = e.options, e.apply(), o
  })
})
