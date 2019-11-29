"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function App(props) {

    var facts = props.facts.map(function (fact, i) {
        var rateHr = fact.modified ? fact.modified.split("T")[1] : "";

        var updatedStr = "";

        if (fact.updated) {
            var updated = fact.updated.split("T");
            var updatedDate = updated[0].split("-");
            updatedStr = updatedDate[2] + "/" + updatedDate[1] + "/" + updatedDate[0] + " " + updated[1];
        }

        var estilo = fact.flag ? 'green' : 'red';

        //<td>{fact.status}</td>
        return _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
                "td",
                null,
                fact.warehouse
            ),
            _react2.default.createElement(
                "td",
                { className: "centerAlign" },
                fact.date
            ),
            _react2.default.createElement(
                "td",
                { className: "centerAlign" },
                rateHr
            ),
            _react2.default.createElement(
                "td",
                { className: "centerAlign" },
                updatedStr
            ),
            _react2.default.createElement(
                "td",
                { style: { textAlign: 'center', color: estilo } },
                fact.status
            )
        );
    });

    //genero una lista unica de fechas segun los datos que llegan del json.
    //para facilitar el filtrado.
    var dates = props.facts.map(function (d) {
        return d.date;
    });
    var uniqDates = ["todas"].concat(_toConsumableArray(new Set(dates))).map(function (v) {
        return _react2.default.createElement(
            "option",
            { value: v },
            v
        );
    });

    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h2",
            null,
            "Actualizaci\xF3n de Tasa de Cambio por Restaurante"
        ),
        _react2.default.createElement(
            "h4",
            { style: { textAlign: 'center', paddingRight: '40%' } },
            _react2.default.createElement(
                "strong",
                null,
                "Fecha de la Tasa:"
            ),
            _react2.default.createElement(
                "select",
                { id: "ddlRateDates" },
                uniqDates
            )
        ),
        _react2.default.createElement("br", { style: { paddingBottom: '5px' } }),
        _react2.default.createElement(
            "table",
            null,
            _react2.default.createElement(
                "tHead",
                null,
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "th",
                        null,
                        "Rest."
                    ),
                    _react2.default.createElement(
                        "th",
                        { className: "col2" },
                        "Fecha"
                    ),
                    _react2.default.createElement(
                        "th",
                        { className: "col3" },
                        "Hora"
                    ),
                    _react2.default.createElement(
                        "th",
                        { className: "col4" },
                        "Actualizado el."
                    ),
                    _react2.default.createElement(
                        "th",
                        { className: "col5" },
                        "status"
                    )
                )
            ),
            _react2.default.createElement(
                "tbody",
                null,
                facts
            )
        )
    );
}

exports.default = App;