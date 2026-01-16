

import * as d_in from "../../../../../interface/generated/pareto/schemas/server/data"
import * as d_out from "astn/dist/interface/generated/pareto/schemas/token/data"

export const Relative_Location = ($: d_in.Position): d_out.Relative_Location => ({
    'line': $.line,
    'column': $.character
})
