import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/client/marshall"


export const Format_Error: _i_signatures._T_Format_Error = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'message': _pa.cc($['message'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Format_Options: _i_signatures._T_Format_Options = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'indent string': _pa.cc($['indent string'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'insert spaces': _pa.cc($['insert spaces'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
    'preserve commas': _pa.cc($['preserve commas'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
    'preserve delimiters': _pa.cc($['preserve delimiters'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
    'preserve final newline state': _pa.cc($['preserve final newline state'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
})]
export const Format_Parameters: _i_signatures._T_Format_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'content': _pa.cc($['content'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'options': _pa.cc($['options'], ($) => Format_Options(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Format_Result: _i_signatures._T_Format_Result = ($, $p) => ['list', $.map(($) => Text_Edit(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Position: _i_signatures._T_Position = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'character': _pa.cc($['character'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
    'line': _pa.cc($['line'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
})]
export const Range: _i_signatures._T_Range = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'end': _pa.cc($['end'], ($) => Position(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'start': _pa.cc($['start'], ($) => Position(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Replace: _i_signatures._T_Replace = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'range': _pa.cc($['range'], ($) => Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'text': _pa.cc($['text'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Sort_Alphabetically_Parameters: _i_signatures._T_Sort_Alphabetically_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'content': _pa.cc($['content'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'position': _pa.cc($['position'], ($) => Position(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Text_Edit: _i_signatures._T_Text_Edit = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'delete': return _pa.ss($, ($) => ({
            'state': "delete",
            'value': ['verbose group', _pa.dictionary_literal({
                'range': _pa.cc($['range'], ($) => Range(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'insert': return _pa.ss($, ($) => ({
            'state': "insert",
            'value': ['verbose group', _pa.dictionary_literal({
                'location': _pa.cc($['location'], ($) => Position(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'text': _pa.cc($['text'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'replace': return _pa.ss($, ($) => ({
            'state': "replace",
            'value': Replace(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})]
