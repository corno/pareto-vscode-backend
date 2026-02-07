
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/client/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/client/data"

export const Position: t_signatures.Position = ($) => ({
    'line': _p_change_context(
        $['line'],
        ($) => $,
    ),
    'character': _p_change_context(
        $['character'],
        ($) => $,
    ),
})

export const Range: t_signatures.Range = ($) => ({
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
})

export const Format_Options: t_signatures.Format_Options = ($) => ({
    'insert spaces': _p_change_context(
        $['insert spaces'],
        ($) => $,
    ),
    'preserve delimiters': _p_change_context(
        $['preserve delimiters'],
        ($) => $,
    ),
    'preserve final newline state': _p_change_context(
        $['preserve final newline state'],
        ($) => $,
    ),
    'preserve commas': _p_change_context(
        $['preserve commas'],
        ($) => $,
    ),
    'indent string': _p_change_context(
        $['indent string'],
        ($) => $,
    ),
})

export const Text_Edit: t_signatures.Text_Edit = ($) => _p.decide.state(
    $,
    ($): t_out.Text_Edit => {
        switch ($[0]) {
            case 'replace':
                return _p.ss(
                    $,
                    ($) => ['replace', Replace(
                        $,
                    )],
                )
            case 'delete':
                return _p.ss(
                    $,
                    ($) => ['delete', {
                        'range': _p_change_context(
                            $['range'],
                            ($) => Range(
                                $,
                            ),
                        ),
                    }],
                )
            case 'insert':
                return _p.ss(
                    $,
                    ($) => ['insert', {
                        'location': _p_change_context(
                            $['location'],
                            ($) => Position(
                                $,
                            ),
                        ),
                        'text': _p_change_context(
                            $['text'],
                            ($) => $,
                        ),
                    }],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)

export const Replace: t_signatures.Replace = ($) => ({
    'range': _p_change_context(
        $['range'],
        ($) => Range(
            $,
        ),
    ),
    'text': _p_change_context(
        $['text'],
        ($) => $,
    ),
})

export const Format_Result: t_signatures.Format_Result = ($) => _p.list.map(
    $,
    ($) => Text_Edit(
        $,
    ),
)

export const Format_Error: t_signatures.Format_Error = ($) => ({
    'message': _p_change_context(
        $['message'],
        ($) => $,
    ),
})

export const Format_Parameters: t_signatures.Format_Parameters = ($) => ({
    'options': _p_change_context(
        $['options'],
        ($) => Format_Options(
            $,
        ),
    ),
})

export const Sort_Alphabetically_Parameters: t_signatures.Sort_Alphabetically_Parameters = ($) => ({
    'position': _p_change_context(
        $['position'],
        ($) => Position(
            $,
        ),
    ),
})
