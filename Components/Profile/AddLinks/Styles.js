import {StyleSheet} from 'react-native';
import colors from '../../ThemeColor/ThemeColor';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 80,
  },
  LinksNumberContainer: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    margin: 5,
    flex: 1,
  },
  profileImageContainer: {
    backgroundColor: colors.profileBackgroundColor,
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 25,
    height: 25,
    tintColor: colors.profilePictureTint,
  },
  LinksNumberText: {
    color: colors.textColor,
    marginTop: 10,
  },
  backBtn: {
    width: 30,
    height: 30,
    top: 10,
    flex: 1,
    alignItems: 'flex-start',
    zIndex: 5,
    tintColor: colors.textColor,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 26,
    color: colors.textColor,
  },
  headerText: {
    fontSize: 16,
    color: colors.textColor,
  },
  inputContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.textInputBackground,
    borderWidth: 1,
    borderColor: colors.textInputBorder,
    width: '100%',
    height: 50,
    margin: 10,
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 16,
    color: colors.textColor,
  },
  scroll: {
    backgroundColor: colors.addLinksBackgroundColor,
  },
  bigBtn: {
    height: 390,
    width: 280,
    margin: 10,
    marginBottom: 10,
    backgroundColor: colors.addLinksBigBtnBackground,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
  },

  bigBtnImage: {
    backgroundColor: '#505050',
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    zIndex: 2,
  },
  bigBtnFeatured: {
    paddingHorizontal: 25,
    color: colors.addLinksBigBtnFetured,
    marginTop: 30,
  },
  bigBtnTitle: {
    paddingHorizontal: 25,
    fontSize: 20,
    color: colors.addLinksBigBtnTitle,
    fontWeight: '500',
  },
  bigBtnDescription: {
    paddingHorizontal: 25,
    marginTop: 10,
    color: colors.addLinksBigBtnDescription,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    zIndex: 4,
    backgroundColor: colors.addLinksBackgroundColor,
  },
  text: {
    fontSize: 14,
    color: colors.textColor,
    textAlign: 'center',
  },
  bigTitle: {
    fontSize: 30,
    backgroundColor: colors.addLinksBackgroundColor,
    color: colors.textColor,
    fontWeight: '400',
    marginBottom: 20,
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  flatListContainer: {
    marginVertical: 15,
    backgroundColor: colors.addLinksBackgroundColor,
  },
  tripleBtnsContainer: {
    height: 300,
    width: 280,
    margin: 10,
    marginBottom: 10,
    marginTop: 0,
    backgroundColor: colors.addLinksBackgroundColor,
    overflow: 'hidden',
    // shadowColor: '#000',
    // elevation: 10,
  },
  tripleBtns: {
    height: 70,
    marginVertical: 10,
    width: '100%',
    backgroundColor: colors.tripleBtnBackground,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tripleBtnsImage: {
    width: 50,
    height: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOpacity: 0.1,
    elevation: 3,
    margin: 10,
    resizeMode: 'contain',
  },
  tripleBtnsText: {
    color: colors.tripleBtnTitle,
    marginHorizontal: 10,
  },
  tripleBtnsAddBtn: {
    width: 50,
    height: 30,
    backgroundColor: '#e2e2e2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5,
  },
  tripleBtnsAddBtnText: {
    color: '#000',
  },
});