import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/client/data_types/target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/client/unmarshall"


export const Format_Error: _i_signatures._T_Format_Error = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
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
)
export const Format_Options: _i_signatures._T_Format_Options = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'indent string': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "indent string",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'insert spaces': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "insert spaces",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
            'preserve commas': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "preserve commas",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
            'preserve delimiters': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "preserve delimiters",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
            'preserve final newline state': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "preserve final newline state",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
        }),
    }
)
export const Format_Parameters: _i_signatures._T_Format_Parameters = ($, $p) => _i_generic.process_group(
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
            'options': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "options",
                }
            ), ($) => Format_Options(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Format_Result: _i_signatures._T_Format_Result = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => Text_Edit(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
export const Position: _i_signatures._T_Position = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
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
        }),
    }
)
export const Range: _i_signatures._T_Range = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
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
        }),
    }
)
export const Replace: _i_signatures._T_Replace = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
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
            'text': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "text",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const Sort_Alphabetically_Parameters: _i_signatures._T_Sort_Alphabetically_Parameters = ($, $p) => _i_generic.process_group(
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
export const Text_Edit: _i_signatures._T_Text_Edit = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'delete': ($): _i_out._T_Text_Edit.SG => ['delete', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
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
            )],
            'insert': ($): _i_out._T_Text_Edit.SG => ['insert', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'location': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "location",
                            }
                        ), ($) => Position(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                        'text': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "text",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
            'replace': ($): _i_out._T_Text_Edit.SG => ['replace', Replace(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
