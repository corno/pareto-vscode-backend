

import * as s_in from "../server_data_types"
import * as s_out from "astn/dist/generated/interface/schemas/token/data_types/source"

export const Relative_Location = ($: s_in.Position): s_out.Relative_Location => {
	return {
		'line': $.line,
		'column': $.character
	}
}
