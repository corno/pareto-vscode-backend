    
    import * as _p from "pareto-core/dist/expression"
    
    import _p_change_context from "pareto-core/dist/_p_change_context"
    
    import _p_text_from_list from "pareto-core/dist/_p_text_from_list"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/server/marshall"
    
    import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
    
    import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"
    
    import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
    
    export const Diagnostic_Severity: t_signatures.Diagnostic_Severity = ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'error':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'error',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                },
                            )]],
                        }),
                    )
                case 'warning':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'warning',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                },
                            )]],
                        }),
                    )
                case 'information':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'information',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                },
                            )]],
                        }),
                    )
                case 'hint':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'hint',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                },
                            )]],
                        }),
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )]
    
    export const Position: t_signatures.Position = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'line': _p_change_context(
                $['line'],
                ($) => ['text', {
                    'delimiter': ['none', null],
                    'value': _p_text_from_list(
                        v_serialize_number.serialize(
                            $,
                        ),
                        ($) => $,
                    ),
                }],
            ),
            'character': _p_change_context(
                $['character'],
                ($) => ['text', {
                    'delimiter': ['none', null],
                    'value': _p_text_from_list(
                        v_serialize_number.serialize(
                            $,
                        ),
                        ($) => $,
                    ),
                }],
            ),
        },
    )]]
    
    export const Range: t_signatures.Range = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'start': _p_change_context(
                $['start'],
                ($) => Position(
                    $,
                ),
            ),
            'end': _p_change_context(
                $['end'],
                ($) => Position(
                    $,
                ),
            ),
        },
    )]]
    
    export const Diagnostic: t_signatures.Diagnostic = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'severity': _p_change_context(
                $['severity'],
                ($) => Diagnostic_Severity(
                    $,
                ),
            ),
            'range': _p_change_context(
                $['range'],
                ($) => Range(
                    $,
                ),
            ),
            'message': _p_change_context(
                $['message'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'related information': _p_change_context(
                $['related information'],
                ($) => ['optional', _p.decide.optional(
                    $,
                    ($): t_out.Value.optional => ['set', ['list', _p.list.map(
                        $,
                        ($) => ['group', ['verbose', _p.dictionary.literal(
                            {
                                'location': _p_change_context(
                                    $['location'],
                                    ($) => ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            'file path': _p_change_context(
                                                $['file path'],
                                                ($) => ['text', {
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                }],
                                            ),
                                            'range': _p_change_context(
                                                $['range'],
                                                ($) => Range(
                                                    $,
                                                ),
                                            ),
                                        },
                                    )]],
                                ),
                                'message': _p_change_context(
                                    $['message'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                            },
                        )]],
                    )]],
                    () => ['not set', null],
                )],
            ),
        },
    )]]
    
    export const Diagnostics: t_signatures.Diagnostics = ($) => ['list', _p.list.map(
        $,
        ($) => Diagnostic(
            $,
        ),
    )]
    
    export const Document_Data: t_signatures.Document_Data = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'file path': _p_change_context(
                $['file path'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'content': _p_change_context(
                $['content'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
        },
    )]]
    
    export const Hover_Texts: t_signatures.Hover_Texts = ($) => ['list', _p.list.map(
        $,
        ($) => ['text', {
            'delimiter': ['quote', null],
            'value': $,
        }],
    )]
    
    export const Optional_Hover_Texts: t_signatures.Optional_Hover_Texts = ($) => ['optional', _p.decide.optional(
        $,
        ($): t_out.Value.optional => ['set', Hover_Texts(
            $,
        )],
        () => ['not set', null],
    )]
    
    export const On_Hover_Result: t_signatures.On_Hover_Result = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'contents': _p_change_context(
                $['contents'],
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        'hover texts': _p_change_context(
                            $['hover texts'],
                            ($) => Optional_Hover_Texts(
                                $,
                            ),
                        ),
                    },
                )]],
            ),
        },
    )]]
    
    export const Completion_Items: t_signatures.Completion_Items = ($) => ['list', _p.list.map(
        $,
        ($) => ['group', ['verbose', _p.dictionary.literal(
            {
                'label': _p_change_context(
                    $['label'],
                    ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }],
                ),
                'insert text': _p_change_context(
                    $['insert text'],
                    ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }],
                ),
                'documentation': _p_change_context(
                    $['documentation'],
                    ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }],
                ),
            },
        )]],
    )]
    
    export const Optional_Completion_Items: t_signatures.Optional_Completion_Items = ($) => ['optional', _p.decide.optional(
        $,
        ($): t_out.Value.optional => ['set', Completion_Items(
            $,
        )],
        () => ['not set', null],
    )]
    
    export const On_Completion_Result: t_signatures.On_Completion_Result = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'completion items': _p_change_context(
                $['completion items'],
                ($) => Completion_Items(
                    $,
                ),
            ),
        },
    )]]
    
    export const On_Validate_Document_Result: t_signatures.On_Validate_Document_Result = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'diagnostics': _p_change_context(
                $['diagnostics'],
                ($) => Diagnostics(
                    $,
                ),
            ),
        },
    )]]
    
    export const Convert_To_JSON_Parameters: t_signatures.Convert_To_JSON_Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'content': _p_change_context(
                $['content'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
        },
    )]]
    
    export const Seal_Parameters: t_signatures.Seal_Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'content': _p_change_context(
                $['content'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
        },
    )]]
    
    export const On_Completion_Parameters: t_signatures.On_Completion_Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'content': _p_change_context(
                $['content'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'file path': _p_change_context(
                $['file path'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'position': _p_change_context(
                $['position'],
                ($) => Position(
                    $,
                ),
            ),
            'indent': _p_change_context(
                $['indent'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
        },
    )]]
    
    export const On_Hover_Parameters: t_signatures.On_Hover_Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'content': _p_change_context(
                $['content'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'file path': _p_change_context(
                $['file path'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'position': _p_change_context(
                $['position'],
                ($) => Position(
                    $,
                ),
            ),
        },
    )]]
    
    export const Validate_Document_Parameters: t_signatures.Validate_Document_Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'content': _p_change_context(
                $['content'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'file path': _p_change_context(
                $['file path'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'tab size': _p_change_context(
                $['tab size'],
                ($) => ['text', {
                    'delimiter': ['none', null],
                    'value': _p_text_from_list(
                        v_serialize_number.serialize(
                            $,
                        ),
                        ($) => $,
                    ),
                }],
            ),
        },
    )]]
