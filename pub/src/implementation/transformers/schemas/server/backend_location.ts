

import * as d_in from "../../../../interface/generated/pareto/schemas/server/data_types/source"
import * as d_out from "astn/dist/interface/generated/pareto/schemas/token/data_types/source"
import { Signature } from "../../../../interface/algorithms/transformations/server/backend_location"


export const Relative_Location = ($: d_in.Position): d_out.Relative_Location => {
	return {
		'line': $.line,
		'column': $.character
	}
}
