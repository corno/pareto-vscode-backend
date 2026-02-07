
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/server/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/server/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Diagnostic_Severity: t_signatures.Diagnostic_Severity = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Diagnostic_Severity => {
            switch ($t) {
                case 'error':
                    return _p_change_context(
                        $['value'],
                        ($) => ['error', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => null,
                        )],
                    )
                case 'warning':
                    return _p_change_context(
                        $['value'],
                        ($) => ['warning', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => null,
                        )],
                    )
                case 'information':
                    return _p_change_context(
                        $['value'],
                        ($) => ['information', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => null,
                        )],
                    )
                case 'hint':
                    return _p_change_context(
                        $['value'],
                        ($) => ['hint', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => null,
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

export const Diagnostic: t_signatures.Diagnostic = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'severity': _p_change_context(
            $.__get_entry_deprecated(
                'severity',
                ($) => abort(
                    ['no such entry', "severity"],
                ),
            ),
            ($) => Diagnostic_Severity(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
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
        'related information': _p_change_context(
            $.__get_entry_deprecated(
                'related information',
                ($) => abort(
                    ['no such entry', "related information"],
                ),
            ),
            ($) => _p.optional.from.optional(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null],
                    ),
                ),
            ).map(
                ($) => _p.list.from.list(
                    v_unmarshalled_from_parse_tree.List(
                        $,
                        ($) => abort(
                            ['expected a list', null],
                        ),
                    ),
                ).map(
                    ($) => _p_change_context(
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
                                ($) => _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'file path': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'file path',
                                                ($) => abort(
                                                    ['no such entry', "file path"],
                                                ),
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                        ),
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
                                ),
                            ),
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
                    ),
                ),
            ),
        ),
    }),
)

export const Diagnostics: t_signatures.Diagnostics = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => Diagnostic(
        $,
        ($) => abort(
            $,
        ),
    ),
)

export const Document_Data: t_signatures.Document_Data = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'file path': _p_change_context(
            $.__get_entry_deprecated(
                'file path',
                ($) => abort(
                    ['no such entry', "file path"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'content': _p_change_context(
            $.__get_entry_deprecated(
                'content',
                ($) => abort(
                    ['no such entry', "content"],
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

export const Hover_Texts: t_signatures.Hover_Texts = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            ['expected a text', null],
        ),
    ),
)

export const Optional_Hover_Texts: t_signatures.Optional_Hover_Texts = ($, abort) => _p.optional.from.optional(
    v_unmarshalled_from_parse_tree.Optional(
        $,
        ($) => abort(
            ['expected an optional', null],
        ),
    ),
).map(
    ($) => Hover_Texts(
        $,
        ($) => abort(
            $,
        ),
    ),
)

export const On_Hover_Result: t_signatures.On_Hover_Result = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'contents': _p_change_context(
            $.__get_entry_deprecated(
                'contents',
                ($) => abort(
                    ['no such entry', "contents"],
                ),
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'hover texts': _p_change_context(
                        $.__get_entry_deprecated(
                            'hover texts',
                            ($) => abort(
                                ['no such entry', "hover texts"],
                            ),
                        ),
                        ($) => Optional_Hover_Texts(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                }),
            ),
        ),
    }),
)

export const Completion_Items: t_signatures.Completion_Items = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => _p_change_context(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null],
            ),
        ),
        ($) => ({
            'label': _p_change_context(
                $.__get_entry_deprecated(
                    'label',
                    ($) => abort(
                        ['no such entry', "label"],
                    ),
                ),
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            ),
            'insert text': _p_change_context(
                $.__get_entry_deprecated(
                    'insert text',
                    ($) => abort(
                        ['no such entry', "insert text"],
                    ),
                ),
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            ),
            'documentation': _p_change_context(
                $.__get_entry_deprecated(
                    'documentation',
                    ($) => abort(
                        ['no such entry', "documentation"],
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
    ),
)

export const Optional_Completion_Items: t_signatures.Optional_Completion_Items = ($, abort) => _p.optional.from.optional(
    v_unmarshalled_from_parse_tree.Optional(
        $,
        ($) => abort(
            ['expected an optional', null],
        ),
    ),
).map(
    ($) => Completion_Items(
        $,
        ($) => abort(
            $,
        ),
    ),
)

export const On_Completion_Result: t_signatures.On_Completion_Result = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'completion items': _p_change_context(
            $.__get_entry_deprecated(
                'completion items',
                ($) => abort(
                    ['no such entry', "completion items"],
                ),
            ),
            ($) => Completion_Items(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const On_Validate_Document_Result: t_signatures.On_Validate_Document_Result = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'diagnostics': _p_change_context(
            $.__get_entry_deprecated(
                'diagnostics',
                ($) => abort(
                    ['no such entry', "diagnostics"],
                ),
            ),
            ($) => Diagnostics(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Convert_To_JSON_Parameters: t_signatures.Convert_To_JSON_Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'content': _p_change_context(
            $.__get_entry_deprecated(
                'content',
                ($) => abort(
                    ['no such entry', "content"],
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

export const Seal_Parameters: t_signatures.Seal_Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'content': _p_change_context(
            $.__get_entry_deprecated(
                'content',
                ($) => abort(
                    ['no such entry', "content"],
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

export const On_Completion_Parameters: t_signatures.On_Completion_Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'content': _p_change_context(
            $.__get_entry_deprecated(
                'content',
                ($) => abort(
                    ['no such entry', "content"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'file path': _p_change_context(
            $.__get_entry_deprecated(
                'file path',
                ($) => abort(
                    ['no such entry', "file path"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
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
        'indent': _p_change_context(
            $.__get_entry_deprecated(
                'indent',
                ($) => abort(
                    ['no such entry', "indent"],
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

export const On_Hover_Parameters: t_signatures.On_Hover_Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'content': _p_change_context(
            $.__get_entry_deprecated(
                'content',
                ($) => abort(
                    ['no such entry', "content"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'file path': _p_change_context(
            $.__get_entry_deprecated(
                'file path',
                ($) => abort(
                    ['no such entry', "file path"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
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

export const Validate_Document_Parameters: t_signatures.Validate_Document_Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'content': _p_change_context(
            $.__get_entry_deprecated(
                'content',
                ($) => abort(
                    ['no such entry', "content"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'file path': _p_change_context(
            $.__get_entry_deprecated(
                'file path',
                ($) => abort(
                    ['no such entry', "file path"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'tab size': _p_change_context(
            $.__get_entry_deprecated(
                'tab size',
                ($) => abort(
                    ['no such entry', "tab size"],
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
