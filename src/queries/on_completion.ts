import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../server_data_types"

import { $$ as load_astn_document } from "pareto/dist/queries/load_astn_document"

import * as t_find_hover_texts from "../transformations/find_hover_texts"
import * as t_backend_location from "../transformations/backend_location"




export const $$ = (
	$p: {
		'content': string
		'file path': string
		'position': d.Position
	},
): _easync.Guaranteed_Query_Result<d.On_Completion_Result> => load_astn_document(
	{
		'content': $p.content,
		'file path': $p['file path'],
	}
).map(($): d.On_Completion_Result => ({
	'completion items': _ea.array_literal([
		{
			'label': "IMPLEMENT ME",
		},
		{
			'label': "Textpad",
		},
		{
			'label': "Javascript",
		},
		{
			'label': "Foobar",
		},
	])
})).catch(($) => {
	return _easync.query.guaranteed['create result']({
		'completion items': _ea.array_literal([])
	})
})
