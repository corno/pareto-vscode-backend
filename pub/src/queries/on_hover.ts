import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../generated/interface/schemas/server/data_types/source"

import { $$ as load_pareto_document } from "pareto/dist/queries/load_pareto_document"

import * as t_find_hover_texts from "../transformations/temp/get_hover_texts"
import * as t_backend_location from "../transformations/server/backend_location"

export const $$: _easync.Guaranteed_Query_Initializer<d.On_Hover_Parameters, d.On_Hover_Result> = (
	$p,
) => load_pareto_document(
	{
		'content': $p.content,
		'file path': $p['file path'],
	}
).map_(($): d.On_Hover_Result => ({
	'contents': {
		'hover texts': t_find_hover_texts.Node($, {
			'location': t_backend_location.Relative_Location($p.position),
			'full path': ``,
			'id path': ``,
		})
	}
})).catch_(($) => {
	return _easync.query.guaranteed['create result']({
		'contents': {
			'hover texts': _ea.not_set()
		}
	})
})