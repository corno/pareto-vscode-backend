import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../../../../interface/generated/pareto/schemas/server/data_types/source"

import { $$ as load_astn_document, Error } from "pareto/dist/implementation/queries/unguaranteed/load_pareto_document"


import * as t_find_completion_items from "../../transformations/temp/get_completion_items"
import * as t_backend_location from "../../transformations/server/backend_location"
import { Signature } from "../../../../interface/algorithms/queries/unguaranteed/on_completion"



export const $$: _easync.Unguaranteed_Query_Initializer<d.On_Completion_Parameters, d.On_Completion_Result, Error> = (
	$p,
) => load_astn_document(
	{
		'content': $p.content,
		'file path': $p['file path'],
	}
).map_(($): d.On_Completion_Result => ({
	'completion items': t_find_completion_items.Node($, {
		'location': t_backend_location.Relative_Location($p.position),
		'indent': $p.indent,
	}).transform(
		($) => $,
		() => _ea.array_literal([]),
	)
}))
