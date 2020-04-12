class ApplicationController < ActionController::Base
　def set_locale
  　I18n.locale = params[:locale] || I18n.default_locale
　end

  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.json { head :forbidden, content_type: 'text/html' }
      format.html { redirect_to authenticated_root_path, notice: exception.message }
      format.js   { head :forbidden, content_type: 'text/html' }
    end
  end

end
