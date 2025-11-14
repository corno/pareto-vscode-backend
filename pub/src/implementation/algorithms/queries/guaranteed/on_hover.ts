import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../../../../interface/generated/pareto/schemas/server/data_types/source"
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"

import { $$ as load_pareto_document } from "pareto/dist/implementation/algorithms/queries/unguaranteed/load_pareto_document"

import * as t_find_hover_texts from "../../transformations/temp/get_hover_texts"
import * as t_backend_location from "../../transformations/server/backend_location"
import { Signature } from "../../../../interface/algorithms/queries/guaranteed/on_hover"



export type Resources = {
	'queries': {
		'read file': _et.Unguaranteed_Query<d_read_file.Parameters, d_read_file.Result, d_read_file.Error, null>
	}
}

export const $$: _et.Guaranteed_Query<d.On_Hover_Parameters, d.On_Hover_Result, Resources> = (
	$p, $r,
) => load_pareto_document(
	{
		'content': $p.content,
		'file path': $p['file path'],
	},
	$r,
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