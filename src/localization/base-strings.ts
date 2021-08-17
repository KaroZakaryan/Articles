const baseStrings = {
  /** Common */
  appName: 'Articles',

  /** Page content */
  'add.title': 'Add Article',
  'add.content': 'Create your best article.',
  'add.form.label.title': 'Title',
  'add.form.label.content': 'Content',
  'add.form.label.date': 'Date',
  'add.form.label.isActive': 'Is Active',
  'add.form.placeholder.title': 'Enter article title',
  'add.form.placeholder.date': 'Pick date',
  'add.form.submit': 'Submit',
  'add.form.warning': 'You should fill all required fields for all languages!',

  'confirmModal.no': 'No',
  'confirmModal.yes': 'Yes',
  'confirmModal.title': 'Delete confirmation',
  'confirmModal.body': 'Are you sure you want to delete record: {recordName} ?',
  'listing.title': 'Articles listing',
  'listing.content': 'Here are shown all active article items.',

  'details.title': 'Details',
  'details.author': 'Someone famous in',
  'details.content': 'A page that displays the full content of an article.',

  'pagination.prev': 'Previous',
  'pagination.next': 'Next',

  'edit.title': 'Edit article',
  'edit.content': 'Here you can edit your best article.',

  'noMatch.title': 'Error 404',
  'noMatch.contentTitle': 'Error 404 not found',
  'noMatch.content':
    "Ooops! You weren't supposed to see this. The page you're looking for no longer exist.",

  /** Languages */
  en: 'English',
  de: 'German',
  bg: 'Bulgarian',
};

export type LanguageStrings = typeof baseStrings;

export const en = baseStrings;
