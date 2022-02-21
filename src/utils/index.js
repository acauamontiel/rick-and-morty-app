export function getGenderIcon(id) {
	if (id === 'unknown') {
		return false;
	}

	if (id === 'Genderless') {
		return 'transgender';
	}

	return id.toLowerCase();
}
