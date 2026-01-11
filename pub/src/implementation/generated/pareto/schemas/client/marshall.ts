    import * as _p from 'pareto-core-transformer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/client/marshall"
    import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
    
    
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
    export const Format_Options: _i_signatures._T_Format_Options = ($, $p) => ['verbose group', _p.dictionary.literal({
        'insert spaces': _p.deprecated_cc($['insert spaces'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['boolean'](
                $,
                null
            ),
        })]),
        'preserve delimiters': _p.deprecated_cc($['preserve delimiters'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['boolean'](
                $,
                null
            ),
        })]),
        'preserve final newline state': _p.deprecated_cc($['preserve final newline state'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['boolean'](
                $,
                null
            ),
        })]),
        'preserve commas': _p.deprecated_cc($['preserve commas'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['boolean'](
                $,
                null
            ),
        })]),
        'indent string': _p.deprecated_cc($['indent string'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })]
    export const Replace: _i_signatures._T_Replace = ($, $p) => ['verbose group', _p.dictionary.literal({
        'range': _p.deprecated_cc($['range'], ($) => Range(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'text': _p.deprecated_cc($['text'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })]
    export const Text_Edit: _i_signatures._T_Text_Edit = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'replace': return _p.ss($, ($) => ({
                'state': "replace",
                'value': Replace(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'delete': return _p.ss($, ($) => ({
                'state': "delete",
                'value': ['verbose group', _p.dictionary.literal({
                    'range': _p.deprecated_cc($['range'], ($) => Range(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'insert': return _p.ss($, ($) => ({
                'state': "insert",
                'value': ['verbose group', _p.dictionary.literal({
                    'location': _p.deprecated_cc($['location'], ($) => Position(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'text': _p.deprecated_cc($['text'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                })],
            }))
            default: return _p.au($[0])
        }
    })]
    export const Format_Result: _i_signatures._T_Format_Result = ($, $p) => ['list', $.__l_map(($) => Text_Edit(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]
    export const Format_Error: _i_signatures._T_Format_Error = ($, $p) => ['verbose group', _p.dictionary.literal({
        'message': _p.deprecated_cc($['message'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })]
    export const Format_Parameters: _i_signatures._T_Format_Parameters = ($, $p) => ['verbose group', _p.dictionary.literal({
        'options': _p.deprecated_cc($['options'], ($) => Format_Options(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]
    export const Sort_Alphabetically_Parameters: _i_signatures._T_Sort_Alphabetically_Parameters = ($, $p) => ['verbose group', _p.dictionary.literal({
        'position': _p.deprecated_cc($['position'], ($) => Position(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]
