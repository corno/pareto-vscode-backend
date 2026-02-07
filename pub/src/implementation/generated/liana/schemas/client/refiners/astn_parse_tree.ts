
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/client/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/client/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Position: t_signatures.Position = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'line': _p_change_context(
            $.__get_entry_deprecated(
                'line',
                ($) => abort(
                    ['no such entry', "line"],
                ),
            ),
            ($) => v_deserialize_number.deserialize(
                _p_list_from_text(
                    v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                    ($) => $,
                ),
                ($) => abort(
                    ['not a valid number', null],
                ),
            ),
        ),
        'character': _p_change_context(
            $.__get_entry_deprecated(
                'character',
                ($) => abort(
                    ['no such entry', "character"],
                ),
            ),
            ($) => v_deserialize_number.deserialize(
                _p_list_from_text(
                    v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                    ($) => $,
                ),
                ($) => abort(
                    ['not a valid number', null],
                ),
            ),
        ),
    }),
)

export const Range: t_signatures.Range = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'start': _p_change_context(
            $.__get_entry_deprecated(
                'start',
                ($) => abort(
                    ['no such entry', "start"],
                ),
            ),
            ($) => Position(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'end': _p_change_context(
            $.__get_entry_deprecated(
                'end',
                ($) => abort(
                    ['no such entry', "end"],
                ),
            ),
            ($) => Position(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Format_Options: t_signatures.Format_Options = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'insert spaces': _p_change_context(
            $.__get_entry_deprecated(
                'insert spaces',
                ($) => abort(
                    ['no such entry', "insert spaces"],
                ),
            ),
            ($) => v_deserialize_boolean.deserialize(
                _p_list_from_text(
                    v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                    ($) => $,
                ),
                ($) => abort(
                    ['not a valid boolean', null],
                ),
            ),
        ),
        'preserve delimiters': _p_change_context(
            $.__get_entry_deprecated(
                'preserve delimiters',
                ($) => abort(
                    ['no such entry', "preserve delimiters"],
                ),
            ),
            ($) => v_deserialize_boolean.deserialize(
                _p_list_from_text(
                    v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                    ($) => $,
                ),
                ($) => abort(
                    ['not a valid boolean', null],
                ),
            ),
        ),
        'preserve final newline state': _p_change_context(
            $.__get_entry_deprecated(
                'preserve final newline state',
                ($) => abort(
                    ['no such entry', "preserve final newline state"],
                ),
            ),
            ($) => v_deserialize_boolean.deserialize(
                _p_list_from_text(
                    v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                    ($) => $,
                ),
                ($) => abort(
                    ['not a valid boolean', null],
                ),
            ),
        ),
        'preserve commas': _p_change_context(
            $.__get_entry_deprecated(
                'preserve commas',
                ($) => abort(
                    ['no such entry', "preserve commas"],
                ),
            ),
            ($) => v_deserialize_boolean.deserialize(
                _p_list_from_text(
                    v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                    ($) => $,
                ),
                ($) => abort(
                    ['not a valid boolean', null],
                ),
            ),
        ),
        'indent string': _p_change_context(
            $.__get_entry_deprecated(
                'indent string',
                ($) => abort(
                    ['no such entry', "indent string"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
    }),
)

export const Text_Edit: t_signatures.Text_Edit = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Text_Edit => {
            switch ($t) {
                case 'replace':
                    return _p_change_context(
                        $['value'],
                        ($) => ['replace', Replace(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'delete':
                    return _p_change_context(
                        $['value'],
                        ($) => ['delete', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'range': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'range',
                                        ($) => abort(
                                            ['no such entry', "range"],
                                        ),
                                    ),
                                    ($) => Range(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }),
                        )],
                    )
                case 'insert':
                    return _p_change_context(
                        $['value'],
                        ($) => ['insert', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'location': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'location',
                                        ($) => abort(
                                            ['no such entry', "location"],
                                        ),
                                    ),
                                    ($) => Position(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                                'text': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'text',
                                        ($) => abort(
                                            ['no such entry', "text"],
                                        ),
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                ),
                            }),
                        )],
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)

export const Replace: t_signatures.Replace = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'range': _p_change_context(
            $.__get_entry_deprecated(
                'range',
                ($) => abort(
                    ['no such entry', "range"],
                ),
            ),
            ($) => Range(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'text': _p_change_context(
            $.__get_entry_deprecated(
                'text',
                ($) => abort(
                    ['no such entry', "text"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
    }),
)

export const Format_Result: t_signatures.Format_Result = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => Text_Edit(
        $,
        ($) => abort(
            $,
        ),
    ),
)

export const Format_Error: t_signatures.Format_Error = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'message': _p_change_context(
            $.__get_entry_deprecated(
                'message',
                ($) => abort(
                    ['no such entry', "message"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
    }),
)

export const Format_Parameters: t_signatures.Format_Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'options': _p_change_context(
            $.__get_entry_deprecated(
                'options',
                ($) => abort(
                    ['no such entry', "options"],
                ),
            ),
            ($) => Format_Options(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Sort_Alphabetically_Parameters: t_signatures.Sort_Alphabetically_Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'position': _p_change_context(
            $.__get_entry_deprecated(
                'position',
                ($) => abort(
                    ['no such entry', "position"],
                ),
            ),
            ($) => Position(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)
