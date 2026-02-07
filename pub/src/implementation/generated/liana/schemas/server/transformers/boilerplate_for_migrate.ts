
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/server/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/server/data"

export const Diagnostic_Severity: t_signatures.Diagnostic_Severity = ($) => _p.decide.state(
    $,
    ($): t_out.Diagnostic_Severity => {
        switch ($[0]) {
            case 'error':
                return _p.ss(
                    $,
                    ($) => ['error', null],
                )
            case 'warning':
                return _p.ss(
                    $,
                    ($) => ['warning', null],
                )
            case 'information':
                return _p.ss(
                    $,
                    ($) => ['information', null],
                )
            case 'hint':
                return _p.ss(
                    $,
                    ($) => ['hint', null],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)

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

export const Diagnostic: t_signatures.Diagnostic = ($) => ({
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
        ($) => $,
    ),
    'related information': _p_change_context(
        $['related information'],
        ($) => _p.optional.map(
            $,
            ($) => _p.list.map(
                $,
                ($) => ({
                    'location': _p_change_context(
                        $['location'],
                        ($) => ({
                            'file path': _p_change_context(
                                $['file path'],
                                ($) => $,
                            ),
                            'range': _p_change_context(
                                $['range'],
                                ($) => Range(
                                    $,
                                ),
                            ),
                        }),
                    ),
                    'message': _p_change_context(
                        $['message'],
                        ($) => $,
                    ),
                }),
            ),
        ),
    ),
})

export const Diagnostics: t_signatures.Diagnostics = ($) => _p.list.map(
    $,
    ($) => Diagnostic(
        $,
    ),
)

export const Document_Data: t_signatures.Document_Data = ($) => ({
    'file path': _p_change_context(
        $['file path'],
        ($) => $,
    ),
    'content': _p_change_context(
        $['content'],
        ($) => $,
    ),
})

export const Hover_Texts: t_signatures.Hover_Texts = ($) => _p.list.map(
    $,
    ($) => $,
)

export const Optional_Hover_Texts: t_signatures.Optional_Hover_Texts = ($) => _p.optional.map(
    $,
    ($) => Hover_Texts(
        $,
    ),
)

export const On_Hover_Result: t_signatures.On_Hover_Result = ($) => ({
    'contents': _p_change_context(
        $['contents'],
        ($) => ({
            'hover texts': _p_change_context(
                $['hover texts'],
                ($) => Optional_Hover_Texts(
                    $,
                ),
            ),
        }),
    ),
})

export const Completion_Items: t_signatures.Completion_Items = ($) => _p.list.map(
    $,
    ($) => ({
        'label': _p_change_context(
            $['label'],
            ($) => $,
        ),
        'insert text': _p_change_context(
            $['insert text'],
            ($) => $,
        ),
        'documentation': _p_change_context(
            $['documentation'],
            ($) => $,
        ),
    }),
)

export const Optional_Completion_Items: t_signatures.Optional_Completion_Items = ($) => _p.optional.map(
    $,
    ($) => Completion_Items(
        $,
    ),
)

export const On_Completion_Result: t_signatures.On_Completion_Result = ($) => ({
    'completion items': _p_change_context(
        $['completion items'],
        ($) => Completion_Items(
            $,
        ),
    ),
})

export const On_Validate_Document_Result: t_signatures.On_Validate_Document_Result = ($) => ({
    'diagnostics': _p_change_context(
        $['diagnostics'],
        ($) => Diagnostics(
            $,
        ),
    ),
})

export const Convert_To_JSON_Parameters: t_signatures.Convert_To_JSON_Parameters = ($) => ({
    'content': _p_change_context(
        $['content'],
        ($) => $,
    ),
})

export const Seal_Parameters: t_signatures.Seal_Parameters = ($) => ({
    'content': _p_change_context(
        $['content'],
        ($) => $,
    ),
})

export const On_Completion_Parameters: t_signatures.On_Completion_Parameters = ($) => ({
    'content': _p_change_context(
        $['content'],
        ($) => $,
    ),
    'file path': _p_change_context(
        $['file path'],
        ($) => $,
    ),
    'position': _p_change_context(
        $['position'],
        ($) => Position(
            $,
        ),
    ),
    'indent': _p_change_context(
        $['indent'],
        ($) => $,
    ),
})

export const On_Hover_Parameters: t_signatures.On_Hover_Parameters = ($) => ({
    'content': _p_change_context(
        $['content'],
        ($) => $,
    ),
    'file path': _p_change_context(
        $['file path'],
        ($) => $,
    ),
    'position': _p_change_context(
        $['position'],
        ($) => Position(
            $,
        ),
    ),
})

export const Validate_Document_Parameters: t_signatures.Validate_Document_Parameters = ($) => ({
    'content': _p_change_context(
        $['content'],
        ($) => $,
    ),
    'file path': _p_change_context(
        $['file path'],
        ($) => $,
    ),
    'tab size': _p_change_context(
        $['tab size'],
        ($) => $,
    ),
})
