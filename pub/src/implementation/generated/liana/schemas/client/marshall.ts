
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/client/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Position: t_signatures.Position = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'line': _p.deprecated_cc($['line'], ($,) => ['text', ({
        'delimiter': ['none', null],
        'value': v_serialize_number.serialize($),
    })]),
    'character': _p.deprecated_cc($['character'], ($,) => ['text', ({
        'delimiter': ['none', null],
        'value': v_serialize_number.serialize($),
    })]),
}))]]
export const Range: t_signatures.Range = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'start': _p.deprecated_cc($['start'], ($,) => Position($)),
    'end': _p.deprecated_cc($['end'], ($,) => Position($)),
}))]]
export const Format_Options: t_signatures.Format_Options = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'insert spaces': _p.deprecated_cc($['insert spaces'], ($,) => ['text', ({
        'delimiter': ['none', null],
        'value': v_serialize_boolean.serialize($),
    })]),
    'preserve delimiters': _p.deprecated_cc($['preserve delimiters'], ($,) => ['text', ({
        'delimiter': ['none', null],
        'value': v_serialize_boolean.serialize($),
    })]),
    'preserve final newline state': _p.deprecated_cc($['preserve final newline state'], ($,) => ['text', ({
        'delimiter': ['none', null],
        'value': v_serialize_boolean.serialize($),
    })]),
    'preserve commas': _p.deprecated_cc($['preserve commas'], ($,) => ['text', ({
        'delimiter': ['none', null],
        'value': v_serialize_boolean.serialize($),
    })]),
    'indent string': _p.deprecated_cc($['indent string'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
}))]]
export const Replace: t_signatures.Replace = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'range': _p.deprecated_cc($['range'], ($,) => Range($)),
    'text': _p.deprecated_cc($['text'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
}))]]
export const Text_Edit: t_signatures.Text_Edit = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'replace':
            return _p.ss($, ($,) => ({
                'option': 'replace',
                'value': Replace($),
            }))
        case 'delete':
            return _p.ss($, ($,) => ({
                'option': 'delete',
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'range': _p.deprecated_cc($['range'], ($,) => Range($)),
                }))]],
            }))
        case 'insert':
            return _p.ss($, ($,) => ({
                'option': 'insert',
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'location': _p.deprecated_cc($['location'], ($,) => Position($)),
                    'text': _p.deprecated_cc($['text'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                }))]],
            }))
        default:
            return _p.au($[0])
    }
})]
export const Format_Result: t_signatures.Format_Result = ($,) => ['list', $.__l_map(($,) => Text_Edit($))]
export const Format_Error: t_signatures.Format_Error = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'message': _p.deprecated_cc($['message'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
}))]]
export const Format_Parameters: t_signatures.Format_Parameters = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'options': _p.deprecated_cc($['options'], ($,) => Format_Options($)),
}))]]
export const Sort_Alphabetically_Parameters: t_signatures.Sort_Alphabetically_Parameters = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'position': _p.deprecated_cc($['position'], ($,) => Position($)),
}))]]
