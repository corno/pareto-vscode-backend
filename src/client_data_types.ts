import * as _et from 'exupery-core-types'

/**
 * This file is a manual schema, it should be generated at some point
 */


export type Position = {
	'line': number
	'character': number
}

export type Range = {
	'start': Position
	'end': Position
}

export type Format_Options = {
	'insert spaces': boolean
	'preserve delimiters': boolean
	'preserve final newline state': boolean
	'preserve commas': boolean
	'indent string': string
}

export type Text_Edit =
	| ['replace', Replace]
	| ['delete', { 'range': Range }]
	| ['insert', { 'location': Position, 'text': string }]

export type Replace = {
	'range': Range
	'text': string
}

export type Format_Result = _et.Array<Text_Edit>

export type Format_Error = {
	'message': string
}