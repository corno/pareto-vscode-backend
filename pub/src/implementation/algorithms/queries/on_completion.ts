import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../../../interface/generated/pareto/schemas/server/data_types/source"
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"

// import { $$ as load_astn_document, Error } from "pareto/dist/implementation/algorithms/queries/load_pareto_document"


import * as t_find_completion_items from "../transformations/temp/get_completion_items"
import * as t_backend_location from "../transformations/server/backend_location"
import { Signature } from "../../../interface/algorithms/queries/on_completion"




// export type Resources = {
// 	'queries': {
// 		'read file': _et.Query_Procedure<d_read_file.Parameters, d_read_file.Result, d_read_file.Error, null>
// 	}
// }

// export const $$: _et.Query_Procedure<d.On_Completion_Parameters, d.On_Completion_Result, Error, Resources> = (
// 	$p, $r,
// ) => load_astn_document(
// 	{
// 		'content': $p.content,
// 		'file path': $p['file path'],
// 	},
// 	$r,
// ).map_(($): d.On_Completion_Result => ({
// 	'completion items': t_find_completion_items.Node($, {
// 		'location': t_backend_location.Relative_Location($p.position),
// 		'indent': $p.indent,
// 	}).transform(
// 		($) => $,
// 		() => _ea.list_literal([]),
// 	)
// }))
