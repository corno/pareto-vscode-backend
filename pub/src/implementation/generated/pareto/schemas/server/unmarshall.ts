import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/server/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/server/data_types/target"


export const Diagnostic_Severity: _i_signatures._T_Diagnostic_Severity = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'error': ($): _i_out._T_Diagnostic_Severity.SG => ['error', _i_generic.process_group(
                $,
                {
                    'properties': ($) => null,
                }
            )],
            'warning': ($): _i_out._T_Diagnostic_Severity.SG => ['warning', _i_generic.process_group(
                $,
                {
                    'properties': ($) => null,
                }
            )],
            'information': ($): _i_out._T_Diagnostic_Severity.SG => ['information', _i_generic.process_group(
                $,
                {
                    'properties': ($) => null,
                }
            )],
            'hint': ($): _i_out._T_Diagnostic_Severity.SG => ['hint', _i_generic.process_group(
                $,
                {
                    'properties': ($) => null,
                }
            )],
        }),
    }
)
export const Position: _i_signatures._T_Position = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'line': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "line",
                }
            ), ($) => _i_generic.process_number(
                $,
                {
                    'deserializer': $p['value deserializers']['default number'],
                }
            )),
            'character': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "character",
                }
            ), ($) => _i_generic.process_number(
                $,
                {
                    'deserializer': $p['value deserializers']['default number'],
                }
            )),
        }),
    }
)
export const Range: _i_signatures._T_Range = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'start': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "start",
                }
            ), ($) => Position(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'end': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "end",
                }
            ), ($) => Position(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Diagnostic: _i_signatures._T_Diagnostic = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'severity': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "severity",
                }
            ), ($) => Diagnostic_Severity(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'range': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "range",
                }
            ), ($) => Range(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'message': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "message",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'related information': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "related information",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_unconstrained_list(
                        $,
                        {
                            'value': ($) => _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'location': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "location",
                                            }
                                        ), ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'file path': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "file path",
                                                        }
                                                    ), ($) => _i_generic.process_text(
                                                        $,
                                                        null
                                                    )),
                                                    'range': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "range",
                                                        }
                                                    ), ($) => Range(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )),
                                                }),
                                            }
                                        )),
                                        'message': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "message",
                                            }
                                        ), ($) => _i_generic.process_text(
                                            $,
                                            null
                                        )),
                                    }),
                                }
                            ),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Diagnostics: _i_signatures._T_Diagnostics = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => Diagnostic(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
export const Document_Data: _i_signatures._T_Document_Data = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'file path': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "file path",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'content': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "content",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const Hover_Texts: _i_signatures._T_Hover_Texts = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_text(
            $,
            null
        ),
    }
)
export const Optional_Hover_Texts: _i_signatures._T_Optional_Hover_Texts = ($, $p) => _i_generic.process_optional(
    $,
    {
        'value': ($) => Hover_Texts(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
export const On_Hover_Result: _i_signatures._T_On_Hover_Result = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'contents': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "contents",
                }
            ), ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'hover texts': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "hover texts",
                            }
                        ), ($) => Optional_Hover_Texts(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )),
        }),
    }
)
export const Completion_Items: _i_signatures._T_Completion_Items = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'label': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "label",
                        }
                    ), ($) => _i_generic.process_text(
                        $,
                        null
                    )),
                    'insert text': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "insert text",
                        }
                    ), ($) => _i_generic.process_text(
                        $,
                        null
                    )),
                    'documentation': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "documentation",
                        }
                    ), ($) => _i_generic.process_text(
                        $,
                        null
                    )),
                }),
            }
        ),
    }
)
export const Optional_Completion_Items: _i_signatures._T_Optional_Completion_Items = ($, $p) => _i_generic.process_optional(
    $,
    {
        'value': ($) => Completion_Items(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
export const On_Completion_Result: _i_signatures._T_On_Completion_Result = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'completion items': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "completion items",
                }
            ), ($) => Completion_Items(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const On_Validate_Document_Result: _i_signatures._T_On_Validate_Document_Result = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'diagnostics': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "diagnostics",
                }
            ), ($) => Diagnostics(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Convert_To_JSON_Parameters: _i_signatures._T_Convert_To_JSON_Parameters = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'content': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "content",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const Seal_Parameters: _i_signatures._T_Seal_Parameters = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'content': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "content",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const On_Completion_Parameters: _i_signatures._T_On_Completion_Parameters = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'content': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "content",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'file path': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "file path",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'position': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "position",
                }
            ), ($) => Position(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'indent': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "indent",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const On_Hover_Parameters: _i_signatures._T_On_Hover_Parameters = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'content': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "content",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'file path': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "file path",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'position': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "position",
                }
            ), ($) => Position(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Validate_Document_Parameters: _i_signatures._T_Validate_Document_Parameters = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'content': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "content",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'file path': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "file path",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'tab size': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "tab size",
                }
            ), ($) => _i_generic.process_number(
                $,
                {
                    'deserializer': $p['value deserializers']['default number'],
                }
            )),
        }),
    }
)
