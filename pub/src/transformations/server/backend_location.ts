

import * as d_in from "../../generated/interface/schemas/server/data_types/source"
import * as d_out from "astn/dist/generated/interface/schemas/token/data_types/source"

export const Relative_Location = ($: d_in.Position): d_out.Relative_Location => {
	return {
		'line': $.line,
		'column': $.character
	}
}
