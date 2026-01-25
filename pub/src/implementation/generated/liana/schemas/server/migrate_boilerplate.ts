
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/server/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/server/data"
export const Diagnostic_Severity: t_signatures.Diagnostic_Severity = ($,) => _p.decide.state($, ($,): t_out.Diagnostic_Severity => {
    switch ($[0]) {
        case 'error':
            return _p.ss($, ($,) => ['error', ({
            })])
        case 'warning':
            return _p.ss($, ($,) => ['warning', ({
            })])
        case 'information':
            return _p.ss($, ($,) => ['information', ({
            })])
        case 'hint':
            return _p.ss($, ($,) => ['hint', ({
            })])
        default:
            return _p.au($[0])
    }
})
export const Position: t_signatures.Position = ($,) => ({
    'line': _p.deprecated_cc($['line'], ($,) => $),
    'character': _p.deprecated_cc($['character'], ($,) => $),
})
export const Range: t_signatures.Range = ($,) => ({
    'start': _p.deprecated_cc($['start'], ($,) => Position($)),
    'end': _p.deprecated_cc($['end'], ($,) => Position($)),
})
export const Diagnostic: t_signatures.Diagnostic = ($,) => ({
    'severity': _p.deprecated_cc($['severity'], ($,) => Diagnostic_Severity($)),
    'range': _p.deprecated_cc($['range'], ($,) => Range($)),
    'message': _p.deprecated_cc($['message'], ($,) => $),
    'related information': _p.deprecated_cc($['related information'], ($,) => $.__o_map(($,) => $.__l_map(($,) => ({
        'location': _p.deprecated_cc($['location'], ($,) => ({
            'file path': _p.deprecated_cc($['file path'], ($,) => $),
            'range': _p.deprecated_cc($['range'], ($,) => Range($)),
        })),
        'message': _p.deprecated_cc($['message'], ($,) => $),
    })))),
})
export const Diagnostics: t_signatures.Diagnostics = ($,) => $.__l_map(($,) => Diagnostic($))
export const Document_Data: t_signatures.Document_Data = ($,) => ({
    'file path': _p.deprecated_cc($['file path'], ($,) => $),
    'content': _p.deprecated_cc($['content'], ($,) => $),
})
export const Hover_Texts: t_signatures.Hover_Texts = ($,) => $.__l_map(($,) => $)
export const Optional_Hover_Texts: t_signatures.Optional_Hover_Texts = ($,) => $.__o_map(($,) => Hover_Texts($))
export const On_Hover_Result: t_signatures.On_Hover_Result = ($,) => ({
    'contents': _p.deprecated_cc($['contents'], ($,) => ({
        'hover texts': _p.deprecated_cc($['hover texts'], ($,) => Optional_Hover_Texts($)),
    })),
})
export const Completion_Items: t_signatures.Completion_Items = ($,) => $.__l_map(($,) => ({
    'label': _p.deprecated_cc($['label'], ($,) => $),
    'insert text': _p.deprecated_cc($['insert text'], ($,) => $),
    'documentation': _p.deprecated_cc($['documentation'], ($,) => $),
}))
export const Optional_Completion_Items: t_signatures.Optional_Completion_Items = ($,) => $.__o_map(($,) => Completion_Items($))
export const On_Completion_Result: t_signatures.On_Completion_Result = ($,) => ({
    'completion items': _p.deprecated_cc($['completion items'], ($,) => Completion_Items($)),
})
export const On_Validate_Document_Result: t_signatures.On_Validate_Document_Result = ($,) => ({
    'diagnostics': _p.deprecated_cc($['diagnostics'], ($,) => Diagnostics($)),
})
export const Convert_To_JSON_Parameters: t_signatures.Convert_To_JSON_Parameters = ($,) => ({
    'content': _p.deprecated_cc($['content'], ($,) => $),
})
export const Seal_Parameters: t_signatures.Seal_Parameters = ($,) => ({
    'content': _p.deprecated_cc($['content'], ($,) => $),
})
export const On_Completion_Parameters: t_signatures.On_Completion_Parameters = ($,) => ({
    'content': _p.deprecated_cc($['content'], ($,) => $),
    'file path': _p.deprecated_cc($['file path'], ($,) => $),
    'position': _p.deprecated_cc($['position'], ($,) => Position($)),
    'indent': _p.deprecated_cc($['indent'], ($,) => $),
})
export const On_Hover_Parameters: t_signatures.On_Hover_Parameters = ($,) => ({
    'content': _p.deprecated_cc($['content'], ($,) => $),
    'file path': _p.deprecated_cc($['file path'], ($,) => $),
    'position': _p.deprecated_cc($['position'], ($,) => Position($)),
})
export const Validate_Document_Parameters: t_signatures.Validate_Document_Parameters = ($,) => ({
    'content': _p.deprecated_cc($['content'], ($,) => $),
    'file path': _p.deprecated_cc($['file path'], ($,) => $),
    'tab size': _p.deprecated_cc($['tab size'], ($,) => $),
})
