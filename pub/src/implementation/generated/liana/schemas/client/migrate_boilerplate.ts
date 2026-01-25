
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/client/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/client/data"
export const Position: t_signatures.Position = ($,) => ({
    'line': _p.deprecated_cc($['line'], ($,) => $),
    'character': _p.deprecated_cc($['character'], ($,) => $),
})
export const Range: t_signatures.Range = ($,) => ({
    'start': _p.deprecated_cc($['start'], ($,) => Position($)),
    'end': _p.deprecated_cc($['end'], ($,) => Position($)),
})
export const Format_Options: t_signatures.Format_Options = ($,) => ({
    'insert spaces': _p.deprecated_cc($['insert spaces'], ($,) => $),
    'preserve delimiters': _p.deprecated_cc($['preserve delimiters'], ($,) => $),
    'preserve final newline state': _p.deprecated_cc($['preserve final newline state'], ($,) => $),
    'preserve commas': _p.deprecated_cc($['preserve commas'], ($,) => $),
    'indent string': _p.deprecated_cc($['indent string'], ($,) => $),
})
export const Replace: t_signatures.Replace = ($,) => ({
    'range': _p.deprecated_cc($['range'], ($,) => Range($)),
    'text': _p.deprecated_cc($['text'], ($,) => $),
})
export const Text_Edit: t_signatures.Text_Edit = ($,) => _p.decide.state($, ($,): t_out.Text_Edit => {
    switch ($[0]) {
        case 'replace':
            return _p.ss($, ($,) => ['replace', Replace($)])
        case 'delete':
            return _p.ss($, ($,) => ['delete', ({
                'range': _p.deprecated_cc($['range'], ($,) => Range($)),
            })])
        case 'insert':
            return _p.ss($, ($,) => ['insert', ({
                'location': _p.deprecated_cc($['location'], ($,) => Position($)),
                'text': _p.deprecated_cc($['text'], ($,) => $),
            })])
        default:
            return _p.au($[0])
    }
})
export const Format_Result: t_signatures.Format_Result = ($,) => $.__l_map(($,) => Text_Edit($))
export const Format_Error: t_signatures.Format_Error = ($,) => ({
    'message': _p.deprecated_cc($['message'], ($,) => $),
})
export const Format_Parameters: t_signatures.Format_Parameters = ($,) => ({
    'options': _p.deprecated_cc($['options'], ($,) => Format_Options($)),
})
export const Sort_Alphabetically_Parameters: t_signatures.Sort_Alphabetically_Parameters = ($,) => ({
    'position': _p.deprecated_cc($['position'], ($,) => Position($)),
})
