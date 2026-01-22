    import * as _p from 'pareto-core/dist/transformer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/server/marshall"
    import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
    
    
    export const Diagnostic_Severity: _i_signatures._T_Diagnostic_Severity = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'error': return _p.ss($, ($) => ({
                'state': "error",
                'value': ['verbose group', _p.dictionary.literal({
                })],
            }))
            case 'warning': return _p.ss($, ($) => ({
                'state': "warning",
                'value': ['verbose group', _p.dictionary.literal({
                })],
            }))
            case 'information': return _p.ss($, ($) => ({
                'state': "information",
                'value': ['verbose group', _p.dictionary.literal({
                })],
            }))
            case 'hint': return _p.ss($, ($) => ({
                'state': "hint",
                'value': ['verbose group', _p.dictionary.literal({
                })],
            }))
            default: return _p.au($[0])
        }
    })]
    export const Position: _i_signatures._T_Position = ($, $p) => ['verbose group', _p.dictionary.literal({
        'line': _p.deprecated_cc($['line'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['default number'](
                $,
                null
            ),
        })]),
        'character': _p.deprecated_cc($['character'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['default number'](
                $,
                null
            ),
        })]),
    })]
    export const Range: _i_signatures._T_Range = ($, $p) => ['verbose group', _p.dictionary.literal({
        'start': _p.deprecated_cc($['start'], ($) => Position(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'end': _p.deprecated_cc($['end'], ($) => Position(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]
    export const Diagnostic: _i_signatures._T_Diagnostic = ($, $p) => ['verbose group', _p.dictionary.literal({
        'severity': _p.deprecated_cc($['severity'], ($) => Diagnostic_Severity(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'range': _p.deprecated_cc($['range'], ($) => Range(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'message': _p.deprecated_cc($['message'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'related information': _p.deprecated_cc($['related information'], ($) => ['optional', $.__decide(
            ($): _i_out._T_Value.SG.optional => ['set', ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
                'location': _p.deprecated_cc($['location'], ($) => ['verbose group', _p.dictionary.literal({
                    'file path': _p.deprecated_cc($['file path'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'range': _p.deprecated_cc($['range'], ($) => Range(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })]),
                'message': _p.deprecated_cc($['message'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })])]],
            () => ['not set', null]
        )]),
    })]
    export const Diagnostics: _i_signatures._T_Diagnostics = ($, $p) => ['list', $.__l_map(($) => Diagnostic(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]
    export const Document_Data: _i_signatures._T_Document_Data = ($, $p) => ['verbose group', _p.dictionary.literal({
        'file path': _p.deprecated_cc($['file path'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'content': _p.deprecated_cc($['content'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })]
    export const Hover_Texts: _i_signatures._T_Hover_Texts = ($, $p) => ['list', $.__l_map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]
    export const Optional_Hover_Texts: _i_signatures._T_Optional_Hover_Texts = ($, $p) => ['optional', $.__decide(
        ($): _i_out._T_Value.SG.optional => ['set', Hover_Texts(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )],
        () => ['not set', null]
    )]
    export const On_Hover_Result: _i_signatures._T_On_Hover_Result = ($, $p) => ['verbose group', _p.dictionary.literal({
        'contents': _p.deprecated_cc($['contents'], ($) => ['verbose group', _p.dictionary.literal({
            'hover texts': _p.deprecated_cc($['hover texts'], ($) => Optional_Hover_Texts(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]),
    })]
    export const Completion_Items: _i_signatures._T_Completion_Items = ($, $p) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
        'label': _p.deprecated_cc($['label'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'insert text': _p.deprecated_cc($['insert text'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'documentation': _p.deprecated_cc($['documentation'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })])]
    export const Optional_Completion_Items: _i_signatures._T_Optional_Completion_Items = ($, $p) => ['optional', $.__decide(
        ($): _i_out._T_Value.SG.optional => ['set', Completion_Items(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )],
        () => ['not set', null]
    )]
    export const On_Completion_Result: _i_signatures._T_On_Completion_Result = ($, $p) => ['verbose group', _p.dictionary.literal({
        'completion items': _p.deprecated_cc($['completion items'], ($) => Completion_Items(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]
    export const On_Validate_Document_Result: _i_signatures._T_On_Validate_Document_Result = ($, $p) => ['verbose group', _p.dictionary.literal({
        'diagnostics': _p.deprecated_cc($['diagnostics'], ($) => Diagnostics(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]
    export const Convert_To_JSON_Parameters: _i_signatures._T_Convert_To_JSON_Parameters = ($, $p) => ['verbose group', _p.dictionary.literal({
        'content': _p.deprecated_cc($['content'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })]
    export const Seal_Parameters: _i_signatures._T_Seal_Parameters = ($, $p) => ['verbose group', _p.dictionary.literal({
        'content': _p.deprecated_cc($['content'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })]
    export const On_Completion_Parameters: _i_signatures._T_On_Completion_Parameters = ($, $p) => ['verbose group', _p.dictionary.literal({
        'content': _p.deprecated_cc($['content'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'file path': _p.deprecated_cc($['file path'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'position': _p.deprecated_cc($['position'], ($) => Position(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'indent': _p.deprecated_cc($['indent'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })]
    export const On_Hover_Parameters: _i_signatures._T_On_Hover_Parameters = ($, $p) => ['verbose group', _p.dictionary.literal({
        'content': _p.deprecated_cc($['content'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'file path': _p.deprecated_cc($['file path'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'position': _p.deprecated_cc($['position'], ($) => Position(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]
    export const Validate_Document_Parameters: _i_signatures._T_Validate_Document_Parameters = ($, $p) => ['verbose group', _p.dictionary.literal({
        'content': _p.deprecated_cc($['content'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'file path': _p.deprecated_cc($['file path'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'tab size': _p.deprecated_cc($['tab size'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['default number'](
                $,
                null
            ),
        })]),
    })]
