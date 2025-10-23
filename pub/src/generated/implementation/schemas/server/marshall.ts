import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/server/marshall"


export const Completion_Items: _i_signatures._T_Completion_Items = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
    'documentation': _pa.cc($['documentation'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'insert text': _pa.cc($['insert text'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'label': _pa.cc($['label'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})])]
export const Convert_To_JSON_Parameters: _i_signatures._T_Convert_To_JSON_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'content': _pa.cc($['content'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Diagnostic: _i_signatures._T_Diagnostic = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'message': _pa.cc($['message'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'range': _pa.cc($['range'], ($) => Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'related information': _pa.cc($['related information'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'location': _pa.cc($['location'], ($) => ['verbose group', _pa.dictionary_literal({
                'file path': _pa.cc($['file path'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'range': _pa.cc($['range'], ($) => Range(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })]),
            'message': _pa.cc($['message'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        })])]],
        () => ['not set', null]
    )]),
    'severity': _pa.cc($['severity'], ($) => Diagnostic_Severity(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Diagnostic_Severity: _i_signatures._T_Diagnostic_Severity = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'error': return _pa.ss($, ($) => ({
            'state': "error",
            'value': ['verbose group', _pa.dictionary_literal({
            })],
        }))
        case 'hint': return _pa.ss($, ($) => ({
            'state': "hint",
            'value': ['verbose group', _pa.dictionary_literal({
            })],
        }))
        case 'information': return _pa.ss($, ($) => ({
            'state': "information",
            'value': ['verbose group', _pa.dictionary_literal({
            })],
        }))
        case 'warning': return _pa.ss($, ($) => ({
            'state': "warning",
            'value': ['verbose group', _pa.dictionary_literal({
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Diagnostics: _i_signatures._T_Diagnostics = ($, $p) => ['list', $.map(($) => Diagnostic(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Document_Data: _i_signatures._T_Document_Data = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'content': _pa.cc($['content'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'file path': _pa.cc($['file path'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Hover_Texts: _i_signatures._T_Hover_Texts = ($, $p) => ['list', $.map(($) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})])]
export const On_Completion_Parameters: _i_signatures._T_On_Completion_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'content': _pa.cc($['content'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'file path': _pa.cc($['file path'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'indent': _pa.cc($['indent'], ($) => ['text', ({
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
export const On_Completion_Result: _i_signatures._T_On_Completion_Result = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'completion items': _pa.cc($['completion items'], ($) => Completion_Items(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const On_Hover_Parameters: _i_signatures._T_On_Hover_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'content': _pa.cc($['content'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'file path': _pa.cc($['file path'], ($) => ['text', ({
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
export const On_Hover_Result: _i_signatures._T_On_Hover_Result = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'contents': _pa.cc($['contents'], ($) => ['verbose group', _pa.dictionary_literal({
        'hover texts': _pa.cc($['hover texts'], ($) => Optional_Hover_Texts(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]),
})]
export const On_Validate_Document_Result: _i_signatures._T_On_Validate_Document_Result = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'diagnostics': _pa.cc($['diagnostics'], ($) => Diagnostics(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Optional_Completion_Items: _i_signatures._T_Optional_Completion_Items = ($, $p) => ['optional', $.transform(
    ($): _i_out._T_Value.SG.optional => ['set', Completion_Items(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )],
    () => ['not set', null]
)]
export const Optional_Hover_Texts: _i_signatures._T_Optional_Hover_Texts = ($, $p) => ['optional', $.transform(
    ($): _i_out._T_Value.SG.optional => ['set', Hover_Texts(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )],
    () => ['not set', null]
)]
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
export const Seal_Parameters: _i_signatures._T_Seal_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'content': _pa.cc($['content'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Validate_Document_Parameters: _i_signatures._T_Validate_Document_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'content': _pa.cc($['content'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'file path': _pa.cc($['file path'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'tab size': _pa.cc($['tab size'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
})]
