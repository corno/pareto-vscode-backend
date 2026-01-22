

import * as d_in from "../../../../../interface/generated/liana/schemas/server/data"
import * as d_out from "astn-core/dist/interface/generated/liana/schemas/token/data"

export const Relative_Location = ($: d_in.Position): d_out.Relative_Location => ({
    'line': $.line,
    'column': $.character
})
